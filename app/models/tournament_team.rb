class TournamentTeam < ApplicationRecord
    belongs_to :tournament
    has_many :tournament_team_participants
end
