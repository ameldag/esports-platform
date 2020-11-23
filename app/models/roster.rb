class Roster < ApplicationRecord
  belongs_to :team
  belongs_to :game
  has_many :requests, dependent: :destroy

  has_many :roster_users
  has_many :users, through: :roster_users

  has_many :roster_tournaments
  has_many :tournaments, through: :roster_tournaments

  has_one_attached :cover, dependent: :destroy

end
