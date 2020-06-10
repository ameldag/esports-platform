class RosterController < ApplicationController
  before_action :authenticate_user!
  layout "in-app"
  def list
    @team = Team.friendly.find(params['team_id'])
    @rosters = @team.rosters  
  end

  def show
    @roster = Roster.find(params['id'])
  end

  def join
    @roster = Roster.find(params[:id])
    
    # doit verifier request de type roster 
    @current_user_request = Request.where('user_id = ? and status = ? and target = ? ',current_user.id, "pending", "roster").count 
    if (!current_user.team.rosters.nil?)
      respond_to do |format|
        format.html { redirect_to show_roster_path(current_user.team, @roster), alert: 'You already belong to this roster' }
        # format.json { render :show, location: @team }
      end

    else

      if (@current_user_request < 1)

        @request = Request.new

        @request.target = "roster"
        @request.status = "pending"
        @request.user = current_user
        @request.roster = @roster

        respond_to do |format|
          if @request.save
            format.html { redirect_to show_roster_path(current_user.team, @roster), notice: 'Your request was successfully sent.' }
            # format.json { render :show, status: :created, location: @team }
          else
            format.html { render :new }
            # format.json { render json: @team.errors, status: :unprocessable_entity }
          end
        end

      else
        respond_to do |format|
          format.html { redirect_to show_roster_path(current_user.team, @roster), alert: 'You already requested to join this roster' }
          # format.json { render :show, location: @team }
        end

      end
    end
  end

  def join_request_answer
  end

  def quit
    @roster = Roster.find(params[:id])
    if (@roster.team.owner_id == current_user.id)
      respond_to do |format|
        format.html { redirect_to show_roster_path(@roster), alert: 'You cannot quit the as a founder until you designate another team owner' }
        format.json { render :show, location: @roster }
      end
    elsif (current_user.rosters.present?)
      current_user.rosters.delete(@roster)

      if current_user.update(user_params)        
        respond_to do |format|
          format.html { redirect_to show_roster_path(@roster), notice: 'You successfully quit the roster' }
          format.json { render :show, location: @roster }
        end

      else        
        respond_to do |format|
          format.html { redirect_to show_roster_path(@roster), alert: 'It appears there have been an error while quitting, please retry later' }
          format.json { render :show, location: @roster }
        end

      end
    else       
      respond_to do |format|
        format.html { redirect_to show_roster_path(@roster), alert: 'It appears there have been an error while quitting, please retry later' }
        format.json { render :show, location: @roster }
      end
      
    end
  end

  def add
  end

  def edit
      @roster = Roster.find(params['id'])
  end

  def update
    @roster = Roster.find(params[:id])

    if @roster.update(roster_params)
    redirect_to team_rosters_path(@roster.team)
    else
      render 'edit'
    end
  end

  def new
    @current_user_teams = Team.where('owner_id = ?', current_user.id).all
    if ((@current_user_teams.count < 0))
      respond_to do |format|

          format.html { redirect_to root_path(), alert: 'You need to be owner to have this permission.' }

      end
    else
      @roster = Roster.new
    end
  end

  def create
    @roster = Roster.new(roster_params)
    # control number of restor per game for that team
    @roster.team = current_user.team
    if @roster.save
      respond_to do |format|
          format.html { redirect_to show_roster_path(@roster.team, @roster), notice: 'Roster was successfully created.' }

      end
    else 
      respond_to do |format|
        format.html { redirect_to new_roster_path(), notice: 'It appears an error occured while creating the roster.' }
      end
    end
  end

  def delete
    @roster = Roster.find(params[:id])
    @team = @roster.team
    @roster.destroy
    respond_to do |format|
      format.html { redirect_to team_rosters_path(@team), notice: 'Roster was successfully deleted.' }
    end
    
  end

  private
  def roster_params
    params.permit(:name, :limit, :game, :team)
  end
  def user_params
    params.permit(:first_name, :last_name, :created_at, :updated_at, :email, :username, :provider, :uid, :team)
  end
end
