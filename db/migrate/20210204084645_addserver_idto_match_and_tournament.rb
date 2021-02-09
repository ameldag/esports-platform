class AddserverIdtoMatchAndTournament < ActiveRecord::Migration[6.0]
  def change
    add_reference :matches, :server, foreign_key: true
    add_reference :tournaments, :server, foreign_key: true
  end
end
