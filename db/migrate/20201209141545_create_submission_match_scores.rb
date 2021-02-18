class CreateSubmissionMatchScores < ActiveRecord::Migration[6.0]
  def change
    create_table :submission_match_scores do |t|
      t.text :comment
      t.references :match, foreign_key: true
      t.references :user, foreign_key: true
      t.references :roster, foreign_key: true
      t.integer "score"

      t.timestamps
    end
  end
end