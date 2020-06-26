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
    @challenge = Challenge.find_by(params[:id])
    @participation = ChallengeParticipant.joins(:challenge).where( 'user_id = ? and challenge_id = ?', current_user.id, params[:id] ).first()
    @side = @participation.side
    if(Challenge.joins(:challenge_participants).where('challenge_id = ? and side like ? and challenge_participants.status = ? ', params[:id], @participation.side, 'confirmed').count() > @challenge.slots_per_team)
      return respond_to do |format|
        format.html { redirect_to show_challenge_path(@game, @challenge), alert: 'You cannot add other users.'  }
      end
    else
      @invited_user = User.find_by(params[:invited_id])
      @challenge_participant = ChallengeParticipant.create(
        user_id: params[:invited_id],
        challenge_id: params[:id],
        side: @side,
        status: :invited,
        confirmation_code: SecureRandom.hex
      )
      if(@challenge_participant.save)
        return respond_to do |format|
          format.html { redirect_to show_challenge_path(@game, @challenge), notice: 'User invited successfully.'  }
        end
      end
    end    
  end

  def confirm_challenge_invitation
    @participation = ChallengeParticipant.where('confirmation_code like ?', params[:confirmation_code]).first
    if(@participation.user_id != current_user.id)||(@participation.status != 'invited')
      return respond_to do |format|
        format.html { redirect_to show_challenge_path(@game, @participation.challenge), alert: 'expired invitation.'  }
      end
    end
    @participation.status = 'confirmed'
    if(@participation.save)
      return respond_to do |format|
        format.html { redirect_to show_challenge_path(@game, @participation.challenge), notice: 'Invitation confirmed.'  }
      end
    end
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
