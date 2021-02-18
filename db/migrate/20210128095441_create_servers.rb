class CreateServers < ActiveRecord::Migration[6.0]
  def change
    create_table :servers do |t|
      t.string :hostname
      t.string :port
      t.boolean :is_rcon
      t.string :rcon_password
      t.boolean :is_ready
      t.references :game, foreign_key: true

      t.timestamps
    end
  end
end
