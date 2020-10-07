class RequestController < ApplicationController
  before_action :get_request
  before_action :check_request_is_pending
  before_action :check_user_is_team_owner

  def accept
    @request.accept
    @request.save
  end

  def reject
    @request.reject
    @request.save
  end

  private
  def check_user_is_team_owner
    team = [@request.team, @request.roster.team].compact.first
    unless team.owner_id == current_user.id
      respond_to do |format|
        format.html { redirect_to root_path, alert: "User is not owner" }
      end
    end
  end

  def check_request_is_pending
    unless @request.status == :pending
      respond_to do |format|
        format.html { redirect_to root_path, alert: "Request already handled" }
      end
    end
  end

  def get_request
      @request = Request.find(params[:id])
  end

end
