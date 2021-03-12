class CreateRounds < ActiveRecord::Migration[6.0]
  def change
    create_table :rounds do |t|
      t.string :name
      t.integer :number
      t.references :stage, foreign_key: true
      t.references :group, foreign_key: true

      t.timestamps
    end
  end
end
