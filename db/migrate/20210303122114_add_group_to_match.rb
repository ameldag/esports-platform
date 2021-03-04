class AddGroupToMatch < ActiveRecord::Migration[6.0]
  def change
    add_reference :matches, :group, foreign_key: true
  end
end
