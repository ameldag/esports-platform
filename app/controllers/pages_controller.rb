class PagesController < ApplicationController
  layout "in-app"
  def index
    @games = Game.where('active = ?', true).all
  end
end
