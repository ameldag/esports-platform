class CreateGameMode < ActiveRecord::Migration[6.0]
  def change
    create_table :game_modes do |t|
      t.references :game, foreign_key: true
      t.references :modes, foreign_key: true

      t.timestamps
    end
  end
end
