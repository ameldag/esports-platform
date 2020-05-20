class CreateRosters < ActiveRecord::Migration[6.0]
  def change
    create_table :rosters do |t|
      t.references :team, foreign_key: true
      t.string :name
      t.references :game, foreign_key: true
      t.integer :limit

      t.timestamps
    end
  end
end
