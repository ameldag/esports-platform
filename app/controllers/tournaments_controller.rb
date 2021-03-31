class TournamentsController < ApplicationController
  before_action :authenticate_user!

  before_action :set_tournament, :set_roster, except: [:index, :bracket_generator, :new]
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
    respond_to :html, :json
  end

  def matches
    @matches = Match.where("tournament_id = ?", @tournament.id).all
    @ongoing_match = Match.where("tournament_id = ? and planned_at >= ? AND planned_at <= ?", @tournament.id, DateTime.now, DateTime.now + 1.day)
    @past_match = Match.where("tournament_id = ? and planned_at >= ? AND planned_at <= ?", @tournament.id, 1.day.ago, DateTime.now)
    ## Unscheduled Matches
    @matches_unscheduled = @matches - (@ongoing_match + @past_match)
  end

  def match_details
    @match = Match.find(params[:match_id])
    respond_to do |format|
      format.js { render :partial => "tournaments/match_details.js.erb", locals: { tournament_id: @tournament.id, match: @match } }
    end
  end

  def submit_score
    @match = Match.find(params[:match_id])
    @submission = SubmissionMatchScore.new(params.permit(:match_id, :user_id, :roster_id, :comment, :score, :image))
    if (current_user.rosters.exists?(@match.left_team.id))
      @current_roster = Roster.find(@match.left_team.id)
    end
    if (current_user.rosters.exists?(@match.right_team.id))
      @current_roster = Roster.find(@match.right_team.id)
    end
    respond_to do |format|
      format.html { }
    end
  end

  def score_submission
    @match = Match.find(params[:match_id])
    @submission = SubmissionMatchScore.new(params.permit(:match_id, :user_id, :roster_id, :comment, :score, :image))
    if (current_user.rosters.exists?(@match.left_team.id))
      @submission.roster_id = @match.left_team.id
    end
    if (current_user.rosters.exists?(@match.right_team.id))
      @submission.roster_id = @match.right_team.id
    end
    @submission.user_id = current_user.id
    @submission.match_id = @match.id
    @submission.score = params[:score]
    @submission.comment = params[:comment]
    @submission.image.attach(params[:image])
    @submission.save
    if @submission.score != nil
      redirect_to show_tournament_matches_path(@tournament), notice: "Your request was successfully sent."
    else
      render "submit_score"
    end
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
            @tournament.create_matches
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

  def ongoing_match
    #ongoing_match next 24hours
    @ongoing_match = Match.where("tournament_id = ? and planned_at >= ? AND planned_at <= ?", @tournament.id, DateTime.now, DateTime.now + 1.day)
  end

  def past_match
    @past_match = Match.where("tournament_id = ? and planned_at >= ? AND planned_at <= ?", @tournament.id, 1.day.ago, DateTime.now)
  end

  def bracket_generator
    @tournament = Tournament.new
    @tournament.stage_id = params[:stage]
    @tournament.name = params[:name]
    @tournament.game_id = params[:game]
    @tournament.season_id = 1
    @tournament.slots = params[:rosters].split(",").count
    params[:rosters].split(",").each do |r|
      @roster = Roster.find(r)
      @tournament.rosters << @roster
    end
    if @tournament.save
      @tournament.create_matches
      redirect_to show_tournament_bracket_path(@tournament)
    else
      redirect_to new_tournament_path, alert: "#{@tournament.errors.full_messages}"
    end
  end

  def new
  end

  def edit
  end

  def update
    if @tournament.update(tournament_params)
      redirect_to show_tournament_path(@tournament)
    else
      render "edit"
    end
  end

  private

  def set_tournament
    @tournament = Tournament.friendly.find(params[:id])
  end

  def set_roster
    @roster = current_user.rosters.where("game_id = ?", @tournament.game.id).first
    @roster_tournament = RosterTournament.find_by(roster: @roster, tournament: @tournament)
  end

  def tournament_params
    params.permit(:name, :description, :planned_at, :game_id, :mode_id, :region_id, :stage_id, :user_id)
  end
end
