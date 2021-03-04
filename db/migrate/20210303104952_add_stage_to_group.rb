class AddStageToGroup < ActiveRecord::Migration[6.0]
  def change
    add_reference :groups, :stage, foreign_key: true
  end
end
