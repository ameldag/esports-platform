class CreateUsersTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :users_teams do |t|
      t.references :user, null: false, foreign_key: true
      t.references :team, null: false, foreign_key: true
      t.string :status
      t.datetime :left_at

      t.timestamps
    end
  end
end
