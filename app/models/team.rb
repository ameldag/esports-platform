class Team < ApplicationRecord
  include PublicActivity::Common
  # tracked except: :update, owner: ->(controller, model) { controller && controller.current_user}
  extend FriendlyId
  friendly_id :name, use: :slugged
  validates :name, presence: true
  
  has_many :requests, dependent: :destroy

  has_one_attached :avatar, dependent: :destroy
  has_one_attached :cover, dependent: :destroy

  has_many :users
  has_many :rosters
  has_many :games, through: :rosters

  def game_stats(game)
    stats = {
      "game" => game,
      "match_count" => match_count(game),
      "win_count" => win_count(game),
      "award_count" => award_count(game),
      "joined_tournament_count" => joined_tournament_count(game)
    }
    stats
  end

  def global_stats
    games.map { |g| game_stats(g) }
  end

  # match_count (game) return number of matches in this game 
  def match_count(game)
    roster = rosters.where(game_id: game.id).first
    Match.where(left_team: roster).or(Match.where(right_team: roster)).count
  end

  # win count (game) return the number of won match 
  def win_count(game)
    roster = rosters.where(game_id: game.id).first
    Match.where(left_team: roster).where('left_score > right_score').or(
      Match.where(right_team: roster).where('right_score > left_score')
    ).count
  end

  # award_count
  def award_count(game)
    roster = rosters.where(game_id: game.id).first
    roster.awards.count
  end

  # joind_tournaments_counts
  def joined_tournament_count(game)
    roster = rosters.where(game_id: game.id).first
    roster.tournaments.count
  end
  

  def get_awards
    Award.includes(:roster => :team).where(roster: { teams: { id: self.id } })
  end

end
