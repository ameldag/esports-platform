class GameController < ApplicationController
  before_action :set_team

  layout "in-app"

  def show
    
  end

  def tournaments
    
  end

  private

  def set_game
    @game = Game.friendly.find(params[:id])
  end
  
end
