class TeamController < ApplicationController
  before_action :authenticate_user!
  before_action :set_team, except: [:index, :new, :create, :join_request, :team_request_answer, :quit]

  layout "in-app"

  def index
    @teams = Team.order(:name).page params[:page]
  end

  def show
    
    @requests = Request.where('team_id = ? and user_id != ? and status = ?', @team.id, current_user.id, "pending").all
    @members = @team.users
    
    @current_user_request = Request.where('team_id = ? and user_id = ? and status = ?', @team.id, current_user.id, "pending").count
  end

  def members
    
    @requests = Request.where('team_id = ? and user_id != ? and status = ?', @team.id, current_user.id, "pending").all
    @members = @team.users
    
    @current_user_request = Request.where('team_id = ? and user_id = ? and status = ?', @team.id, current_user.id, "pending").count
  end

  def stats
    
    @requests = Request.where('team_id = ? and user_id != ? and status = ?', @team.id, current_user.id, "pending").all
    @members = @team.users
    
    @current_user_request = Request.where('team_id = ? and user_id = ? and status = ?', @team.id, current_user.id, "pending").count
  end
  
  def requests
    
    @requests = Request.where('team_id = ? and user_id != ? and status = ?', @team.id, current_user.id, "pending").all
    @members = @team.users
    
    @current_user_request = Request.where('team_id = ? and user_id = ? and status = ?', @team.id, current_user.id, "pending").count
  end

  # GET /teams/new
  def new

    @current_user_teams = Team.where('owner_id = ?', current_user.id).all
    if ((@current_user_teams.count > 0))
      respond_to do |format|

        format.html { redirect_to root_path(), alert: 'You already have a team, you cannot create another one.' }

      end
    else
      @team = Team.new
    end

  end

  # GET /teams/1/edit
  def edit
  end

  # POST /teams
  # POST /teams.json
  def create
    @team = Team.new(team_params)
    @team.owner_id = current_user.id

      if @team.save

        current_user.team = @team

        respond_to do |format|
          if current_user.save

            format.html { redirect_to show_team_path(@team), notice: 'Team was successfully created.' }
            format.json { render :show, status: :created, location: @team }
            
          else
            
            format.html { render :new }
            format.json { render json: @team.errors, status: :unprocessable_entity }

          end
        end


      else
        format.html { render :new }
        format.json { render json: @team.errors, status: :unprocessable_entity }
      end
      
  end

  def join_request
    @team = Team.find(params[:team_id])
    @current_user_request = Request.where('team_id = ? and user_id = ? and status = ?', @team.id, current_user.id, "pending").count

    if (current_user.team.present?)
      
      respond_to do |format|
        format.html { redirect_to show_team_path(@team), alert: 'You already belong to a team' }
        format.json { render :show, location: @team }
      end

    else

      if (@current_user_request < 1)

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
  end

  def team_request_answer
    @request = Request.find(params[:request_id])

    @team = @request.team
    @requesting_user = @request.user

    if (@team.owner_id == @requesting_user)
      return false
    elsif (@requesting_user.team.present?)
      return false
    else
      if (params[:answer] == "yes")

        @requesting_user.team = @team

        respond_to do |format|
          if @requesting_user.save

            @request.destroy

            return true
            
          else
            return false
          end
        end

      elsif (params[:answer] == "no")
        @request.status = "refused"
        @request.save
      else
        return false
      end
    end
  end

  def quit
    @team = Team.friendly.find(params[:id])

    if (@team.owner_id == current_user.id)
      respond_to do |format|
        format.html { redirect_to show_team_path(@team), alert: 'You cannot quit the as a founder until you designate another team owner' }
        format.json { render :show, location: @team }
      end
    elsif (current_user.team.present?)
      current_user.team = nil

      if current_user.update(user_params)
          respond_to do |format|
          format.html { redirect_to show_team_path(@team), notice: 'You successfully quit the team' }
          format.json { render :show, location: @team }
        end
      else
        respond_to do |format|
          format.html { redirect_to show_team_path(@team), alert: 'It appears there have been an error while quitting, please retry later' }
          format.json { render :show, location: @team }
        end

      end
    else
      respond_to do |format|
        format.html { redirect_to show_team_path(@team), alert: 'It appears there have been an error while quitting, please retry later' }
        format.json { render :show, location: @team }
      end
      
    end
  end

  private

  def set_team
    @team = Team.friendly.find(params[:id])
  end

  def team_params
    params.permit(:name, :website, :description, :avatar, :cover, :owner_id)
  end

  def user_params
      params.permit(:first_name, :last_name, :created_at, :updated_at, :email, :username, :provider, :uid, :team)
  end
end
