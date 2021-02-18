class GameController < ApplicationController
  before_action :set_game

  layout "in-app"

  def show
    # Listing tournaments in the home page
    @count_tournament = Tournament.active_tournaments(true,@game.id).count()
    @upcoming_tournaments = Tournament.active_tournaments(true,@game.id).where(status: 'upcoming').order(:planned_at).page(params[:upcoming_tournaments]).per(4)
    @ongoing_tournaments =Tournament.active_tournaments(true,@game.id).where(status: 'ongoing').order(:planned_at).page(params[:ongoing_tournaments]).per(4)

    @featured_tournaments = Tournament.joins(:featured)
      .where("tournaments.game_id = ?", 1).where("featureds.active = ?", true)
      .where("featureds.start_date < ? and featureds.end_date > ?", Date.today, Date.today).page(params[:page]).per(4)
      respond_to do |format|
        format.html
        format.js
    end
  end

  def past_tournament
    @past_tournaments = Tournament.active_tournaments(true,@game.id).where(status:['cancelled','finished']).order(:planned_at).page(params[:page]).per(4)
  end

  private

  def set_game
    @game = Game.friendly.find(params[:id])
  end
end
