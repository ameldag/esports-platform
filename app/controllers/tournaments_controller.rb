class TournamentsController < ApplicationController
  before_action :authenticate_user!

  before_action :set_tournament, except: [:index]

  layout "in-app"

  def index
    if params[:game_id]
      @selected_game_id = params[:game_id]
      @tournaments = Tournament.where("game_id = ?", @selected_game_id)
    else
      @selected_game_id = nil
      @tournaments = Tournament.all
    end
  end

  def show
    @similar_tournaments = Tournament.similar_tournaments(@tournament.game.id)
    @similar_tournaments = @similar_tournaments.delete_if { |tournament| tournament.id == @tournament.id }
  end

  def bracket
    respond_to :html, :json
  end

  def matches
    @matches = Challenge.where("tournament_id = ?", @tournament.id).all
  end

  def subscribe
    if (current_user.team.owner_id == current_user.id)
      if ((current_user.rosters.present?) and (current_user.rosters.where("game_id = ?", @tournament.game.id)))
        @tournament.rosters << current_user.rosters.where("game_id = ?", @tournament.game.id)
        if (@tournament.save)
          return respond_to do |format|
                   format.html { redirect_to show_tournament_path(@tournament), notice: "Team is succesfully subscribe to this tournament." }
                 end
        end
      else
        return respond_to do |format|
                 format.html { redirect_to show_tournament_path(@tournament), alert: "It appears there is no roster for this game in this team." }
               end
      end
    end
  end

  def confirm_subscribtion
    if (current_user.team.owner_id == current_user.id)
      @roster = current_user.rosters.find_by(game_id: @tournament.game.id)
      if current_user.rosters.present? and @roster
        if DateTime.current.between?(@tournament.start_date - 3.days, @tournament.start_date - 1.days)
          @confirmed = RosterTournament.find_by(roster: @roster, tournament: @tournament)
          @confirmed.update(confirmed_subscribtion_at: DateTime.current)
          return if (@confirmed.save)
          if tournament.createMatch
            return respond_to do |format|
                     format.html { redirect_to show_tournament_path(@tournament), notice: "Subscribtion is succesfully confirmed to this tournament." }
                   end
          else
            return respond_to do |format|
                     format.html { redirect_to show_tournament_path(@tournament), notice: "It appears there is no roster for this game in this team." }
                   end
          end
        else
          return respond_to do |format|
                   format.html { redirect_to show_tournament_path(@tournament), alert: "It appears you missed the confirmaton period." }
                 end
        end
      end
    end
  end

  def participation
    @user = current_user
    @roster = params[:participation][:roster]
    @type = params[:participation][:type]
    if (@type != "1v1")
      @is_private = true
    end
    @tournament.participate(@user, @roster, @is_private)
    @tournament.save
  end

  private

  def set_tournament
    @tournament = Tournament.friendly.find(params[:id])
  end
end
