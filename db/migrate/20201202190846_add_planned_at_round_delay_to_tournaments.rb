class AddPlannedAtRoundDelayToTournaments < ActiveRecord::Migration[6.0]
  def change
    add_column :tournaments, :planned_at, :datetime
    add_column :tournaments, :round_delay, :decimal
  end
end
