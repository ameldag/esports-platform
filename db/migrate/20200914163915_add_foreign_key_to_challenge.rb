class AddForeignKeyToChallenge < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :challenges, :tournaments
  end
end
