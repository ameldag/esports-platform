class GameController < ApplicationController
  before_action :set_game

  layout "in-app"

  def show
    # Listing tournaments in the home page

  end

  def tournaments
    @ongoing_tournaments = Tournament.where("active = ?", true).where("end_date > ? and start_date < ?", Date.today, Date.today).last(4)
    @past_tournaments = Tournament.where("active = ?", true).where("end_date < ?", Date.today).last(4)
  end

  private

  def set_game
    @game = Game.friendly.find(params[:id])
  end
end
