class UsersController < ApplicationController
    before_action :authenticate_user!
    before_action :set_user, except: [:index]
  
    layout "in-app"
  
    def index
      @users = User.all
    end
  
    def show
    end

      
    def edit
    end

    # PATCH/PUT /users/1
    # PATCH/PUT /users/1.json
    def update

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

    def set_user
        @user = User.friendly.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:username, :first_name, :last_name, :avatar, :cover, :team_id)
    end

end
  