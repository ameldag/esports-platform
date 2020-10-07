class RosterUser < ApplicationRecord
    belongs_to :user
    belongs_to :roster
end
