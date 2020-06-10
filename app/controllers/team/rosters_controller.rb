class Team::RostersController < ApplicationController
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
    # verifier si le roster en question existe ou non
    # autrement rediriger vers la page de la team et dire que le roster recherché n'existe pas
    
    # verifier si l'utilisateur appartient à une team
      # appartient à une team
      # si c'est la meme team
        # doit verifier request de type roster 
        # Actuellement il faut verifier si l'utilisateur a une request pour rejoindre CE roster
        @current_user_request = Request.where('user_id = ? and status = ? and target = ? and roster = ?',current_user.id, "pending", "roster", @roster).count 
        
        # si l'utilisateur a déjà une request en cours
          # le rediriger vers la page du roster et lui dire que sa demande est toujours en cours
        # autrement
          # verifier si l'utilisateur est déjà membre de roster
            # rediriger vers la page du roster et lui dire qu'il est deja membre
          # autrement
            # creer une request
            # envoyer un email pour dire que la requete est bien faite
            # envoyer un email au manager de la team
            # envoyer une notification au manager de la team
            # rediriger vers la page du roster
          #end
        # end
      # si autre team
        # rediriger et dire bye bye habibi
      # end
    # end
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
    # verifier si current_user is team owner
      # si oui
        # verifier si la request existe
          # verifier que le roster visé appartient à la team
          # si la réponse est positive
            # verifier si l'utisateur est membre de la team
              # si oui
                # ajouter au roster
                # effacer la request
                # redirect to requests page
              # si false
                # si il est membre d'une autre team
                  # supprimer la request
                  # rediriger vers la page de requests et dire que l'utilisateur "l'utilisateur est déjà membre d'une autre team et ne peux rejoindre le roster de la votre"
                  # email au submitter pour dire que la demande ne peut aboutir car il appartient déjà à une autre team
          # si la réponse est négative
            # supprimer la request
            # envoyer un email à l'utilisateur
            # rediriger vers la page de requests
        # si la request n'existe pas
          # rediriger et dire que la request n'existe pas
      # si non
        # rediriger et dire que vous n'avez suffisament de droits pour effectuer cette action
    # end

  end

  def quit
    @roster = Roster.find(params[:id])
    # verifier si le roster en question existe ou non
    # autrement rediriger vers la page de la team et dire que le roster recherché n'existe pas

    # verifier si current_user appartient au roster ou non
      # current user appartient, on le enleve le record correspondant au user and au roster de la table de jointure
      # on redirige vers la page du roster, et dire que l'utilisateur a quitté le roster
    # autrement
      # rediriger vers la page du roster
      # dire que l'utilisateur n'appartient pas à ce roster pour pouvoir le quitter
    # end

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
