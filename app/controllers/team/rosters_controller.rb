class Team::RostersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  before_action :authenticate_user!
  before_action :check_user_team

  layout "in-app"

  def list
    @roster = true
    @team = Team.friendly.find(params["team_id"])
    @rosters = @team.rosters
  end

  def show
    @roster = Roster.find(params[:id])
  end

  def add_user_to_roster
    @roster = Roster.find(params[:id])
    @user = User.find(params[:user_id])

    if ((@user.team != @roster.team) and (@user.team.present?))
      return respond_to do |format|
               format.html { redirect_to team_show_roster_path(@roster.team), notice: "User has his own team." }
             end
    end

    if (@user.rosters.exists?(@roster.id))
      return respond_to do |format|
               format.html { redirect_to team_show_roster_path(@roster.team), notice: "User is already membre in this roster." }
             end
    end

    if (@roster.users.count >= @roster.limit)
      return respond_to do |format|
               format.html { redirect_to team_show_roster_path(@roster.team), notice: "Roster is full." }
             end
    end

    if (!@user.team.present?)
      @user.team = @roster.team
      @user.rosters << @roster
      if (@user.save)
        return respond_to do |format|
                 format.html { redirect_to team_show_roster_path(@roster.team), notice: "User is succesfully added in this roster." }
               end
      else
        return respond_to do |format|
                 format.html { redirect_to team_show_roster_path(@roster.team), alert: "It appears there has been an error while saving changes." }
               end
      end
    end
  end

  def join
    @roster = Roster.find(params[:id])

    if (current_user.team != @roster.team)
      raise ApplicationController::NotAuthorized
    end

    @current_user_request = Request.where(
      user: current_user,
      roster: @roster,
      target: :roster,
      status: :pending,
    )

    if (@current_user_request.exists? || current_user.rosters.exists?(@roster.id))
      return respond_to do |format|
               format.html { redirect_to team_show_roster_path(@roster.team) }
             end
    end

    @request = Request.create(
      target: :roster,
      status: :pending,
      user: current_user,
      roster: @roster,
    )

    respond_to do |format|
      format.html { redirect_to team_show_roster_path(current_user.team, @roster), notice: "Your request was successfully sent." }
    end
  end

  def quit
    @roster = Roster.find(params[:id])
    if (current_user.rosters.exists?(@roster.id))
      current_user.rosters.delete(@roster)
    end
    current_user.update(user_params)
    respond_to do |format|
      format.html { redirect_to team_show_roster_path(@roster), notice: "You successfully quit the roster" }
      format.json { render :show, location: @roster }
    end
  end

  def edit
    @roster = Roster.find(params["id"])
  end

  def update
    @roster = Roster.find(params[:id])
    @roster.limit = params[:roster][:limit]
    @roster.name = params[:roster][:name]
    @roster.game_id = params[:roster][:game]

    if @roster.update(roster_params)
      redirect_to team_rosters_path(@roster.team)
    else
      render "edit"
    end
  end

  def new
    @current_user_teams = Team.where("owner_id = ?", current_user.id).all
    if ((@current_user_teams.count < 0))
      respond_to do |format|
        format.html { redirect_to root_path(), alert: "You need to be owner to have this permission." }
      end
    else
      @roster = Roster.new
    end
  end

  def create
    @roster = Roster.new()

    @roster.name = params[:name]
    @roster.limit = params[:limit]
    @roster.game_id = params[:game].to_i
    # control number of restor per game for that team
    @roster.team = current_user.team

    if @roster.save
      respond_to do |format|
        format.html { redirect_to team_show_roster_path(@roster.team, @roster), notice: "Roster was successfully created." }
      end
    else
      respond_to do |format|
        format.html { redirect_to new_roster_path(), notice: "It appears an error occured while creating the roster." }
      end
    end
  end

  def delete
    @roster = Roster.find(params[:id])
    @team = @roster.team
    @roster.destroy
    respond_to do |format|
      format.html { redirect_to team_rosters_path(@team), notice: "Roster was successfully deleted." }
    end
  end

  private

  def roster_params
    params.permit(:name, :limit, :game, :team)
  end

  def user_params
    params.permit(:first_name, :last_name, :created_at, :updated_at, :email, :username, :provider, :uid, :team)
  end

  def record_not_found(exception)
    exception_redirect(show_team_path(current_user.team), exception)
  end
end
