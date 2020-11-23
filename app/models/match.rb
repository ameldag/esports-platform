class Match < ApplicationRecord
  belongs_to :tournament
  belongs_to :left_team, :class_name => "Roster"
  belongs_to :right_team, :class_name => "Roster"
  belongs_to :next_match, :class_name => "Match"
  has_many :match_score, class_name: "MatcheScore", dependent: :destroy


  def update_score
    matchScores = self.match_score;
      if (matchScores.length == 0) 
          self.left_score  = 0
          self.right_score = 0
      elsif (matchScores.length == 1) 
          self.left_score  = matchScores[0].left_score
          self.right_score = matchScores[0].right_score
      else 
          self.left_score  = 0
          self.right_score = 0 
      end

    self.save

    if (self.left_score < self.right_score)
      winner = self.right_team
    else
      winner = self.left_team
    end
    
    return if (!self.next_match_id)
    return if (self.next_match_id && (self.next_match.right_team_id == winner.id || self.next_match.left_team_id == winner.id) )

    if(!self.next_match.left_team)
      self.next_match.left_team = winner
    elsif(!self.next_match.right_team)
      self.next_match.right_team = winner
    end

    self.next_match.save
  end

end
