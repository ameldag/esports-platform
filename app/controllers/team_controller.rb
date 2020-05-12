class TeamController < ApplicationController
  before_action :authenticate_user!

  layout "in-app"

  def index
    @teams = Team.all
  end

  def show
    @team = Team.find(params[:id])
    @requests = Request.where('team_id = ? and user_id = ?', @team.id, current_user.id).all
  end

  # GET /teams/new
  def new
    @team = Team.new
  end

  # GET /teams/1/edit
  def edit
  end

  # POST /teams
  # POST /teams.json
  def create
    @team = Team.new(team_params)

    respond_to do |format|
      if @team.save
        format.html { redirect_to show_team_path(@team), notice: 'Team was successfully created.' }
        format.json { render :show, status: :created, location: @team }
      else
        format.html { render :new }
        format.json { render json: @team.errors, status: :unprocessable_entity }
      end
    end
  end

  def join_request
    @team = Team.find(params[:team_id])

    if (Request.where('team_id = ? and user_id = ?', @team.id, current_user.id).count < 1)

      @request = Request.new

      @request.target = "team"
      @request.status = "pending"
      @request.user = current_user
      @request.team = @team

      respond_to do |format|
        if @request.save
          format.html { redirect_to show_team_path(@team), notice: 'Your request was successfully sent.' }
          format.json { render :show, status: :created, location: @team }
        else
          format.html { render :new }
          format.json { render json: @team.errors, status: :unprocessable_entity }
        end
      end

    else
      respond_to do |format|
        format.html { redirect_to show_team_path(@team), alert: 'You already requested to join that team' }
        format.json { render :show, location: @team }
      end

    end

  end

  private

  def team_params
    params.permit(:name, :user_id, :website, :description, :avatar, :cover)
  end
end
