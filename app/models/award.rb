class Award < ApplicationRecord
  belongs_to :roster
  belongs_to :game
  belongs_to :tournament
end
