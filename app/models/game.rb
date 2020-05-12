class Game < ApplicationRecord
    has_one_attached :icon
    has_one_attached :cover
    has_one_attached :card
end
