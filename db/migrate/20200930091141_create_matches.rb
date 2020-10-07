class CreateMatches < ActiveRecord::Migration[6.0]
  def change
    create_table :matches do |t|
      t.integer :state
      t.integer :left_score
      t.integer :right_score
      t.integer :round
      t.references :tournament, foreign_key: true
      t.references :left_team, foreign_key: { to_table: 'rosters' }
      t.references :right_team, foreign_key: { to_table: 'rosters' }
      t.timestamps
    end
  end
end
