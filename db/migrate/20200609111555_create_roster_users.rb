class CreateRosterUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :roster_users do |t|
      t.references :user
      t.references :roster
    end
  end
end
