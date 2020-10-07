class RemoveForeignKeyFromChallenges < ActiveRecord::Migration[6.0]
  def change
    remove_foreign_key :challenges, :games
    remove_foreign_key :challenge_participants, :users
    remove_foreign_key :challenge_participants, :challenges
  end
end
