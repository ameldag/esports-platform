class CreateMatcheScores < ActiveRecord::Migration[6.0]
  def change
    create_table :match_scores do |t|
      t.integer :left_score
      t.integer :right_score
      t.references :map, foreign_key: true
      t.references :match, foreign_key: true

      t.timestamps
    end
  end
end
