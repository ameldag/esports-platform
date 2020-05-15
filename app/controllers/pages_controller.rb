class PagesController < ApplicationController
  layout "in-app"
  def index
    @games = Game.where('active = ?', true).all
    @last_tournament = Tournament.where('active = ?', true).second

    # Listing tournaments in the home page
    @tournaments = Tournament.where('active = ?', true).last(8)
    @big_prizes_tournaments = Tournament.where('active = ?', true).order('prize DESC').last(4)
    @ongoing_tournaments = Tournament.where('active = ?', true).where('end_date > ? and start_date < ?', Date.today, Date.today).last(4)
  end
end
