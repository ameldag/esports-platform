class ActivitiesController < ApplicationController
  def index
    @activities = PublicActivity::Activity.order("created_at DESC").where(owner_type: "User", owner_id: current_user.id)
    .or(PublicActivity::Activity.order("created_at DESC").where(recipient_type: "Team"))
    .or(PublicActivity::Activity.order("created_at DESC").where(trackable_type: "Match"))
    .or(PublicActivity::Activity.order("created_at DESC").where(trackable_type: "Tournament")).all
  end
end
