class TournamentsController < ApplicationController
  before_action :set_tournament, except: [:index]

  layout "in-app"

  def index
    if params[:game_id]
      @selected_game_id = params[:game_id]
      @tournaments = Tournament.where('game_id = ?', @selected_game_id)
    else
      @selected_game_id = nil
      @tournaments = Tournament.all
    end
  end

  def show
    @similar_tournaments = Tournament.where("game_id = ?", @tournament.game.id).last(4)
    @similar_tournaments = @similar_tournaments.delete_if {|tournament| tournament.id == @tournament.id }
  end

  def bracket
    @similar_tournaments = Tournament.where("game_id = ?", @tournament.game.id).last(4)
    @similar_tournaments = @similar_tournaments.delete_if {|tournament| tournament.id == @tournament.id }
  end

  def matches
    @similar_tournaments = Tournament.where("game_id = ?", @tournament.game.id).last(4)
    @similar_tournaments = @similar_tournaments.delete_if {|tournament| tournament.id == @tournament.id }
  end

  def subscribe
  end

  private

  def set_tournament
    @tournament = Tournament.friendly.find(params[:id])
  end
end
