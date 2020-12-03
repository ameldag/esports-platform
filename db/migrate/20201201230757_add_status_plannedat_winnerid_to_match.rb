class AddStatusPlannedatWinneridToMatch < ActiveRecord::Migration[6.0]
  def change
    add_column :matches, :planned_at, :datetime
    add_reference :matches, :winner, foreign_key:{ to_table: :rosters }
  end
end
