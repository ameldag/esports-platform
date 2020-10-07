class AddMatchToMatch < ActiveRecord::Migration[6.0]
  def change
    add_reference :matches, :next_match, foreign_key:{ to_table: :matches }
  end
end
