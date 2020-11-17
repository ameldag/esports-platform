class CreateAwards < ActiveRecord::Migration[6.0]
  def change
    create_table :awards do |t|
      t.string :title
      t.date :achived_at
      t.references :roster, foreign_key: true
      t.references :game, foreign_key: true
      t.references :tournament, foreign_key: true

      t.timestamps
    end
  end
end
