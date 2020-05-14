class UsersController < ApplicationController
    before_action :authenticate_user!
  
    layout "in-app"
  
    def index
      @teams = Team.all
    end
  
    def show
      @team = Team.find(params[:id])
      @requests = Request.where('team_id = ? and user_id != ? and status = ?', @team.id, current_user.id, "pending").all
      @members = @team.users
      
      @current_user_request = Request.where('team_id = ? and user_id = ? and status = ?', @team.id, current_user.id, "pending").count
    end
  
    private
  

  end
  