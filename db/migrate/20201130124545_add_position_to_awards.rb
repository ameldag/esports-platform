class AddPositionToAwards < ActiveRecord::Migration[6.0]
  def change
    add_column :awards, :position, :integer, :default => 1
  end
end
