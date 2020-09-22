class CreateRegionTournaments < ActiveRecord::Migration[6.0]
  def change
    create_table :region_tournaments do |t|
      t.references :region, foreign_key: true
      t.references :tournament, foreign_key: true

      t.timestamps
    end
  end
end
