class AddGameToTournament < ActiveRecord::Migration[6.0]
  def change
    add_reference :tournaments, :game, null: false
  end
end
