class AddTeamToUser < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :team
  end
end
