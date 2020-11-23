class MatchScore < ApplicationRecord
  belongs_to :map
  belongs_to :match
  after_create :update_score

  def update_score
    self.match.update_score()
  end
end
