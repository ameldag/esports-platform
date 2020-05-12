class TeamController < ApplicationController
  before_action :authenticate_user!

  layout "in-app"
  
  def index
    @teams = Team.all
  end

  def show
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
        format.html { redirect_to @team, notice: 'Team was successfully created.' }
        format.json { render :show, status: :created, location: @team }
      else
        format.html { render :new }
        format.json { render json: @team.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def team_params
    params.permit(:name, :user_id, :website, :description, :avatar, :cover)
  end
end
