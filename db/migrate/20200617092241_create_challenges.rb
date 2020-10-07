class CreateChallenges < ActiveRecord::Migration[6.0]
  def change
    create_table :challenges do |t|
      t.references :game, foreign_key: true
      t.string :kind
      t.integer :slots_per_team
      t.string :status
      t.datetime :start_date
      t.string :server_ip
      t.string :rcon_pwd

      t.timestamps
    end
  end
end
