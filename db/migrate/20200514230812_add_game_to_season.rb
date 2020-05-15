class AddGameToSeason < ActiveRecord::Migration[6.0]
  def change
    add_reference :seasons, :game, null: true
  end
end
