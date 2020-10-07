class GameController < ApplicationController
  before_action :set_game

  layout "in-app"

  def show
    # Listing tournaments in the home page
    @count_tournament = Tournament.where("game_id = ?", @game.id).count()
    @ongoing_tournaments = Tournament.ongoing_tournaments(true, @game.id).where("end_date > ?", Date.today).last(4)
    @featured_tournaments = Tournament.where("active = ? and game_id = ?", true, @game.id).where("start_date > ?", Date.today).last(4)
  end

  def tournaments
    redirect_to ongoing_tournament_path
  end

  def ongoing_tournament
    @ongoing_tournaments = Tournament.ongoing_tournaments(true, @game.id).where("end_date > ?", Date.today).last(4)
  end

  def past_tournament
    @past_tournaments = Tournament.where("active = ?", true).where("end_date < ?", Date.today).last(4)
  end

  private

  def set_game
    @game = Game.friendly.find(params[:id])
  end
end
