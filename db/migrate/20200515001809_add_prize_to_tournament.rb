class AddPrizeToTournament < ActiveRecord::Migration[6.0]
  def change
    add_column :tournaments, :prize, :integer
    add_column :tournaments, :entry_fee, :integer
  end
end
