class RemoveUserIdFromTeam < ActiveRecord::Migration[6.0]
  def change
    remove_column :teams, :user, :references
    add_column :teams, :owner_id, :integer
  end
end
