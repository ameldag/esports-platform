class CreateMatchEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :match_events do |t|
      t.string :type
      t.json :params
      t.references :match, foreign_key: true

      t.timestamps
    end
  end
end
