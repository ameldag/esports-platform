class CreateTournaments < ActiveRecord::Migration[6.0]
  def change
    create_table :tournaments do |t|
      t.string :name
      t.text :description
      t.date :start_date
      t.date :end_date
      t.string :status
      t.boolean :active
      t.integer :slots
      t.references :user, null: false
      t.references :season, null: false

      t.timestamps
    end
  end
end
