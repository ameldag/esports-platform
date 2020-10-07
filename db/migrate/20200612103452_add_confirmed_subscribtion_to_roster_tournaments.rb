class AddConfirmedSubscribtionToRosterTournaments < ActiveRecord::Migration[6.0]
  def change
    add_column :roster_tournaments, :confirmed_subscribtion_at, :datetime
  end
end
