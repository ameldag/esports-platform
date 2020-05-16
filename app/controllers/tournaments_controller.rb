class TournamentsController < ApplicationController
  before_action :set_tournament, only: [:show]

  layout "in-app"

  def index
  end

  def show
    @similar_tournaments = Tournament.where("game_id = ?", @tournament.id).last(4)
  end

  def subscribe
  end

  private

  def set_tournament
    @tournament = Tournament.find(params[:id])
  end
end
