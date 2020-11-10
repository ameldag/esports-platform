class TournamentsController < ApplicationController
  before_action :authenticate_user!

  before_action :set_tournament, :set_roster, except: [:index]

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

    if @roster.present?
      @activities = PublicActivity::Activity.order("created_at DESC").where(owner_type: "Roster", owner_id: @roster.id)
      .or(PublicActivity::Activity.order("created_at DESC").where(trackable_type: "Tournament", trackable_id: @tournament.id))
      .or(PublicActivity::Activity.order("created_at DESC").where(recipient_type: "Tournament", recipient_id: @tournament.id)).all  
    else
      @activities = PublicActivity::Activity.order("created_at DESC").where(trackable_type: "Tournament", trackable_id: @tournament.id)
      .or(PublicActivity::Activity.order("created_at DESC").where(recipient_type: "Tournament", recipient_id: @tournament.id)).all  
    end
  end

  def bracket
    @similar_tournaments = Tournament.similar_tournaments(@tournament.game.id)
    @similar_tournaments = @similar_tournaments.delete_if { |tournament| tournament.id == @tournament.id }
  end

  def matches
    @matches = Match.where("tournament_id = ?", @tournament.id).all
  end

  def subscribe
    if (current_user.team.owner_id == current_user.id)
      if ((current_user.rosters.present?) and (current_user.rosters.where("game_id = ?", @tournament.game.id)))
        @tournament.rosters << current_user.rosters.where("game_id = ?", @tournament.game.id)
        if (@tournament.save)
          return respond_to do |format|
                   format.html { }
                 end
        end
      else
        return respond_to do |format|
                 format.html { }
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
          if (@confirmed.save)
            return respond_to do |format|
                     format.html { }
                   end
          else
            return respond_to do |format|
                     format.html { }
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

  def set_roster
    @roster = current_user.rosters.where("game_id = ?", @tournament.game.id).first
    @roster_tournament = RosterTournament.find_by(roster: @roster, tournament: @tournament)
  end
end
