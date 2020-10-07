class RosterTournaments < ActiveRecord::Migration[6.0]
  def change
    create_table :roster_tournaments do |t|
      t.references :roster
      t.references :tournament
    end
  end
end
