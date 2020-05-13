class RemoveTypeFromRequest < ActiveRecord::Migration[6.0]
  def change
    remove_column :requests, :type, :string
    add_column :requests, :target, :string
  end
end
