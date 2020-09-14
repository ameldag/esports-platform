class Challenge < ApplicationRecord
  belongs_to :game
  belongs_to :tournament
  has_many :challenge_participants
  has_many :users, through: :challenge_participants

  def self.pending_for_user(user, game_id, slots_per_team, kind)
    ChallengeParticipant
      .joins(:challenge)
      .where(
        "user_id = ? and game_id = ? and challenges.status = ? and slots_per_team = ? and kind = ?",
        user.id,
        game_id,
        :pending,
        slots_per_team,
        kind
      )
  end

  def self.join(user, game_id, slots_per_team, kind)
    slot = get_available_slot(game_id, slots_per_team, kind)

    if (!slot[:challenge])
      slot[:challenge] = Challenge.create(
        game_id: game_id,
        slots_per_team: slots_per_team,
        kind: kind,
        status: :pending,
      )
    end

    return ChallengeParticipant.create(
             user_id: user.id,
             challenge: slot[:challenge],
             side: slot[:side],
             status: :confirmed,
           )
  end

  def self.get_available_slot(game_id, slots_per_team, kind)
    ["challenger", "defiant"].each { |s|
      challenge = get_available_slot_for_side(game_id, slots_per_team, kind, s)
      puts "challenge found (0) " + challenge.id.to_s if challenge
      return {
               'challenge': challenge,
               'side': s,
             } if challenge
    }

    challenge = get_challenge_with_least_side_members(game_id, slots_per_team, kind)
    puts "challenge found (1) " + challenge.id.to_s if challenge
    return {
             'challenge': Challenge.find(challenge.id),
             'side': challenge.side,
           } if challenge

    puts "no challenge found (2) "

    return {
             'challenge': nil,
             'side': "challenger",
           }
  end

  def self.get_available_slot_for_side(game_id, slots_per_team, kind, side)
    Challenge
      .where(
        "game_id = ? and challenges.status = ? and slots_per_team = ? and kind = ?",
        game_id,
        "pending",
        slots_per_team,
        kind
      )
      .where.not(id: ChallengeParticipant.where("side like ?", side)
                   .distinct.select(:challenge_id)).first
  end

  def self.get_challenge_with_least_side_members(game_id, slots_per_team, kind)
    Challenge
      .select("side", "challenges.id id")
      .joins(:challenge_participants)
      .where(
        "game_id = ? and challenges.status = ? and slots_per_team = ? and kind = ?",
        game_id,
        "pending",
        slots_per_team,
        kind
      )
      .group("challenges.id", "side")
      .having("count(challenge_participants.id) < ?  ", slots_per_team)
      .order("count(challenge_participants.id) asc")
      .first
  end
end
