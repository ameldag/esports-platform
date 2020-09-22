class Game < ApplicationRecord
    extend FriendlyId
    friendly_id :name, use: :slugged
    
    has_one_attached :icon
    has_one_attached :cover
    has_one_attached :card

    has_many :rosters

    has_many :game_modes
    has_many :modes, through: :game_modes
end
