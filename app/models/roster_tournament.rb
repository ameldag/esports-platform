class RosterTournament < ApplicationRecord
    belongs_to :roster
    belongs_to :tournament
end
