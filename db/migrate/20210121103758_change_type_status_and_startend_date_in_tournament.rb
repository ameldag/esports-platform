class ChangeTypeStatusAndStartendDateInTournament < ActiveRecord::Migration[6.0]
  def change
    change_column :tournaments, :status, :integer, using: 'status::integer'
    change_column :tournaments, :start_date, :datetime
    change_column :tournaments, :end_date, :datetime
  end
end
