class GameController < ApplicationController
  layout "in-app"

  def show
    @game = Game.find(params[:id])
  end

  def tournaments
    @game = Game.find(params[:id])
  end
  
end
