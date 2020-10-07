class CreateTournamentTeamParticipants < ActiveRecord::Migration[6.0]
  def change
    create_table :tournament_team_participants do |t|
      t.references :tournament_team, foreign_key: true
      t.references :user, foreign_key: true
      t.datetime :confirmed_participation_at

      t.timestamps
    end
  end
end
