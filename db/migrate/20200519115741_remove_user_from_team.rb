class RemoveUserFromTeam < ActiveRecord::Migration[6.0]
  def change
    remove_column :teams, :user_id, :integer
  end
end
