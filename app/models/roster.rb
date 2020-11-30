class Roster < ApplicationRecord
  include PublicActivity::Common
  # tracked except: :update, owner: ->(controller, model) { controller && controller.current_user}

  belongs_to :team
  belongs_to :game
  has_many :requests, dependent: :destroy

  has_many :roster_users
  has_many :users, through: :roster_users

  has_many :roster_tournaments
  has_many :tournaments, through: :roster_tournaments

  has_one_attached :cover, dependent: :destroy
  has_many :awards

  has_many :left_matches, class_name: "Match", foreign_key: :left_team_id
  has_many :right_matches, class_name: "Match", foreign_key: :right_team_id

  def matches
    left_matches + right_matches
  end
end
