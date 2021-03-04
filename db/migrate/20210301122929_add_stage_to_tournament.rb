class AddStageToTournament < ActiveRecord::Migration[6.0]
  def change
    add_reference :tournaments, :stage, foreign_key: true
  end
end
