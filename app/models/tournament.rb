class Tournament < ApplicationRecord
  belongs_to :user
  belongs_to :season
  belongs_to :game

  has_one_attached :cover, dependent: :destroy

  validates :season, presence: true
  validates :game, presence: true
end
