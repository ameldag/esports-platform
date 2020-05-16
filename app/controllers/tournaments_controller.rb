class TournamentsController < ApplicationController
  before_action :set_tournament, only: [:show]

  layout "in-app"

  def index
  end

  def show
    @similar_tournaments = Tournament.where("game_id = ?", @tournament.game.id).last(4)
    @similar_tournaments = @similar_tournaments.delete_if {|tournament| tournament.id == @tournament.id }
  end

  def subscribe
  end

  private

  def set_tournament
    @tournament = Tournament.friendly.find(params[:id])
  end
end
