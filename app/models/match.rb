class Match < ApplicationRecord
  include PublicActivity::Model
  tracked owner: ->(controller, model) { controller && controller.current_user }

  after_save :calculate_dates
  belongs_to :tournament
  belongs_to :game, :class_name => "Game"
  belongs_to :left_team, :class_name => "Roster"
  belongs_to :right_team, :class_name => "Roster"
  belongs_to :next_match, :class_name => "Match"
  has_many :match_score, class_name: "MatchScore", dependent: :destroy
  has_many :match_events, class_name: "MatchEvent", dependent: :destroy
  belongs_to :winner, :class_name => "Roster"
  belongs_to :server, :class_name => "Server"
  enum state: [:pending, :started, :ended, :cancelled]

  def update_score
    matchScores = self.match_score
    if (matchScores.length == 0)
      self.left_score = 0
      self.right_score = 0
    elsif (matchScores.length == 1)
      self.left_score = matchScores[0].left_score
      self.right_score = matchScores[0].right_score
    else
      self.left_score = 0
      self.right_score = 0
    end
    if (self.left_score < self.right_score)
      self.winner = self.right_team
    else
      self.winner = self.left_team
    end

    self.save

    return if (self.next_match_id && (self.next_match.right_team_id == self.winner_id || self.next_match.left_team_id == self.winner_id))
    return if self.state = "started"
    # update_next_match
    self.update_next_match() if self.next_match_id
    # add activities
    self.generate_activities()
  end

  def update_next_match
    if (!self.next_match.left_team)
      self.next_match.left_team = self.winner
    elsif (!self.next_match.right_team)
      self.next_match.right_team = self.winner
    end
    self.next_match.save
  end

  def get_loser
    if (self.right_team == self.winner)
      return self.left_team
    elsif (self.left_team == self.winner)
      return self.right_team
    end
  end

  def generate_activities
    if (!self.next_match_id)
      award = Award.new
      award.title = self.tournament.name
      award.achived_at = DateTime.current
      award.roster = self.winner
      award.tournament = self.tournament
      award.game = self.tournament.game
      award.save
      return self.tournament.create_activity :won_tournament, recipient: self, owner: self.winner
    else
      return (self.create_activity :won_match, recipient: self.tournament, owner: self.winner), (self.create_activity :lost_match, recipient: self.tournament, owner: self.get_loser)
    end
  end

  def calculate_dates
    planned_dates = {
      "first_round" => self.tournament.planned_at,
      "next_round" => self.round = 1 ? self.tournament.planned_at + (self.tournament.round_delay * 60) : self.tournament.planned_at + (self.round - 1) * (self.tournament.round_delay * 60)
    }
    planned_dates
  end
end
