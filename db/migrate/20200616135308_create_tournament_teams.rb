class CreateTournamentTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :tournament_teams do |t|
      t.references :tournament, foreign_key: true
      t.string :roster
      t.boolean :is_private
      t.string :invitation_code
      t.timestamps
    end
  end
end
