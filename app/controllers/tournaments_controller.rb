class TournamentsController < ApplicationController
  before_action :set_tournament, only: [:show]

  layout "in-app"

  def index
  end

  def show
  end

  def subscribe
  end

  private

  def set_tournament
    @tournament = Tournament.find(params[:id])
  end
end
