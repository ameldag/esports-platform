class Match < ApplicationRecord
  include PublicActivity::Model
  tracked owner: ->(controller, model) { model && controller }

  belongs_to :tournament
  belongs_to :left_team, :class_name => "Roster"
  belongs_to :right_team, :class_name => "Roster"
  belongs_to :next_match, :class_name => "Match"
  has_many :match_score, class_name: "MatchScore", dependent: :destroy

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
    self.save

    return if (self.next_match_id && (self.next_match.right_team_id == get_winner.id || self.next_match.left_team_id == get_winner.id))
    # update_next_match
    self.update_next_match()
    # add activities
    self.generate_activities()
  end

  def update_next_match
    if (!self.next_match.left_team)
      self.next_match.left_team = get_winner
    elsif (!self.next_match.right_team)
      self.next_match.right_team = get_winner
    end
    self.next_match.save
  end

  def get_winner
    if (self.left_score < self.right_score)
      return self.right_team
    else
      return self.left_team
    end
  end

  def get_loser
    if (self.right_team == get_winner)
      return self.left_team
    elsif (self.left_team == get_winner)
      return self.right_team
    end
  end

  def generate_activities
    if (!self.next_match_id)
      return self.tournament.create_activity :won_tournament, recipient: self, owner: self.get_winner
    else
      return (self.create_activity :won_match, recipient: self.tournament, owner: self.get_winner), (self.create_activity :lost_match, recipient: self.tournament, owner: self.get_loser)
    end
  end
end
