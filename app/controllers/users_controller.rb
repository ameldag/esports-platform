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

      
    def edit
        @user = User.find(params[:id])
    end

    # PATCH/PUT /users/1
    # PATCH/PUT /users/1.json
    def update

        @user = User.find(params[:id])

        respond_to do |format|
            
            if @user.update(user_params)
                format.html { redirect_to root_path, notice: 'Your profile was successfully updated.' }
                format.json { render :show, status: :ok, location: @user }
            else
                format.html { render :edit }
                format.json { render json: @user.errors, status: :unprocessable_entity }
            end

        end
    end

  
    private

    def user_params
        params.require(:user).permit(:username, :first_name, :last_name, :avatar, :cover)
    end

end
  