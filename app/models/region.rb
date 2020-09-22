class Region < ApplicationRecord
    has_many :region_tournaments
    has_many :tournaments, through: :region_tournaments
 end
