class Map < ApplicationRecord
  belongs_to :game

  has_many :map_tournaments
  has_many :tournaments, through: :map_tournaments

  has_many :match_score
end
