class RemoveForeignKey < ActiveRecord::Migration[6.0]
  def change
    remove_foreign_key :requests, :teams
    remove_foreign_key :requests, :users
    remove_foreign_key :teams, :users
    remove_foreign_key :users_teams, :teams
    remove_foreign_key :users_teams, :users
  end
end
