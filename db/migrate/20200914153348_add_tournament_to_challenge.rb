class AddTournamentToChallenge < ActiveRecord::Migration[6.0]
  def change
    add_reference :challenges, :tournament
  end
end
