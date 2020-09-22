class AddGameModeIdToTournaments < ActiveRecord::Migration[6.0]
  def change
    change_table :tournaments do |t|
      t.references :modes, foreign_key: true
    end
  end
end
