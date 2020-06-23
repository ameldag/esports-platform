require 'securerandom'
class ChallengeController < ApplicationController
  before_action :authenticate_user!
  before_action :set_game

  layout "in-app"
  def challenges
    @challenges = Challenge.all
  end

  def show
  end

  def participants
  end

  def feed
  end

  def join
    participation = Challenge.pending_for_user(current_user, params[:game_id], params[:slots_per_team], params[:kind]).first

    if(!participation)
      participation = Challenge.join(current_user, params[:game_id], params[:slots_per_team], params[:kind])
    end

    return respond_to do |format|
      format.html { redirect_to show_challenge_path(@game, participation.challenge) }
    end
  end


  def compose_team
    #find challenge
    @challenge.find_by(params[:id])
    if(@challenge.participants.side.where('side ? = ', current_user.challenge.side, 'status = ?', 'confirmed').count() > @challenge.slots_per_team)
      return respond_to do |format|
        format.html { redirect_to participants_challenge_path(@challenge), alert: 'You cannot add other users.'  }
      end
    else
      @invited_user = User.find_by(prams[:invited_id])
      @challenge.participants << @invited_user
      @challenge_participant = ChallengeParticipant.find_by(@invited_user)
      @challenge_participant.invitaion_code = SecureRandom.hex
      @challenge_participant.side = params[:challenge][:side]
      @challenge_participant.status = 'invited'
      if(@challenge_participant.save)
        return respond_to do |format|
          format.html { redirect_to participants_challenge_path(@challenge), notice: 'User invited successfully.'  }
        end
      end
    end
      #if challenge_participant where count.participants in side of current_user and status = confirmed >= challenge.slots_per_team
        #redirect to challenge page with alert cannot add other users
      #else add invited_user participants, give him invited_code, status = invited , side = current_user_side and save
  end

  def confirm_challenge_invitation
    #find challenge_participant where (challenge_id= params.id, user_id= params.id invitaion_code, params.invitation_code )
      #if challenge.users where(side = challenge_participant.side, status= confirmed).count >= challenge.slots_per_team
        #redirect with alert "expired invitation"
      #else challenge_participant.status = confirmed and change status if challenge.slots_per_team>= slots_per_team save 

  end

  private

  def set_game
    @game = Game.friendly.find(params[:game_id])
  end
end
