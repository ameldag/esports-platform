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
  end

  def join_request_answer
  end

  def quit
  end

  def add
  end

  def edit
    @current_user_teams = Team.where('owner_id = ?', current_user.id).all
    if ((@current_user_teams.count < 0))
      respond_to do |format|

          format.html { redirect_to root_path(), alert: 'You need to be owner to have this permission.' }

      end
    else
      @roster = Roster.find(params['id'])
    end
    
  end

  def update
    @roster = Roster.find(params[:id])

  if @roster.update(roster_params)
    redirect_to @roster
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
    if @roster.save
      respond_to do |format|
          format.html { redirect_to show_roster_path(@roster), notice: 'Roster was successfully created.' }
          format.json { render :show, status: :created, location: @team }
     
          
          # format.html { render :new }
          # format.json { render json: @team.errors, status: :unprocessable_entity }

        end
      end

      format.html { render :new }
      format.json { render json: @team.errors, status: :unprocessable_entity }

  end

  def delete
    @roster = Roster.find(params[:id])
    @roster.destroy
    format.html { redirect_to list_roster_path(), notice: 'Roster was successfully deleted.' }
  end


  def roster_params
    params.permit(:name, :limit)
  end
end
