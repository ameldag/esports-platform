class AddGameToMatches < ActiveRecord::Migration[6.0]
  def change
    add_reference :matches, :game, foreign_key: true
  end
end
