class GameController < ApplicationController
  before_action :set_game

  layout "in-app"

  def show
    # Listing tournaments in the home page
    @count_tournament = Tournament.where("game_id = ?", @game.id).count()
    @ongoing_tournaments = Tournament.where('active = ? and game_id = ?', true, @game.id).where('end_date > ?', Date.today).last(4)
  end

  def tournaments
    
  end

  private

  def set_game
    @game = Game.friendly.find(params[:id])
  end
  
end
