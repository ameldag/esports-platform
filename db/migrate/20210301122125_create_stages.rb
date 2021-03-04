class CreateStages < ActiveRecord::Migration[6.0]
  def change
    create_table :stages do |t|
      t.string :name
      t.string :stage_type
      t.integer :number

      t.timestamps
    end
  end
end
