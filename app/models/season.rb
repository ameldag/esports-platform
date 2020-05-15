class Season < ApplicationRecord
    has_many :tournaments
    belongs_to :game

    validates :game, presence: true
end
