class AddRoundToMatch < ActiveRecord::Migration[6.0]
  def change
    remove_column :matches, :round, :integer
    add_reference :matches, :round, foreign_key: true
  end
end
