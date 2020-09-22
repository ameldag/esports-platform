class CreateMapTournaments < ActiveRecord::Migration[6.0]
  def change
    create_table :map_tournaments do |t|
      t.references :tournament, foreign_key: true
      t.references :map, foreign_key: true

      t.timestamps
    end
  end
end
