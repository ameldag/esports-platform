class TeamController < ApplicationController
  layout "in-app"
  def index
    @teams = Team.all
  end

  def show
  end

  def edit
  end

  def new
    @team = Team.new
  end

  def create
    @team = Team.new(params[:team])
    if @team.save
      redirect_to team_show_path(@team.id)
    else
      render "new"
    end
    
  end
end
