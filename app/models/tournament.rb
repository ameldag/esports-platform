class Tournament < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged
  
  belongs_to :season
  belongs_to :game

  has_many :roster_tournaments
  has_many :rosters, through: :roster_tournaments

  has_one_attached :cover, dependent: :destroy

  validates :season, presence: true
  validates :game, presence: true
end
