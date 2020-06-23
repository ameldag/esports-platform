class CreateChallengeParticipants < ActiveRecord::Migration[6.0]
  def change
    create_table :challenge_participants do |t|
      t.references :user, foreign_key: true
      t.references :challenge, foreign_key: true
      t.string :confirmation_code
      t.string :status
      t.integer :kills
      t.integer :deaths
      t.integer :score
      t.string :result
      t.string :side

      t.timestamps
    end
  end
end
