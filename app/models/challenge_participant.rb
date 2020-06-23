class ChallengeParticipant < ApplicationRecord
  belongs_to :user
  belongs_to :challenge

  after_create :update_challenge_status

  def update_challenge_status
    if challenge.challenge_participants.count >= challenge.slots_per_team * 2
      challenge.update(status: :confirmed)
    end
  end
end
