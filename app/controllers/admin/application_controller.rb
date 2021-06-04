# All Administrate controllers inherit from this
# `Administrate::ApplicationController`, making it the ideal place to put
# authentication logic or other before_actions.
#
# If you want to add pagination or other controller-level concerns,
# you're free to overwrite the RESTful controller actions.
module Admin
  class ApplicationController < Administrate::ApplicationController
    before_action do
      if current_user && !current_user.admin?
        redirect_to root_url, alert: "Sorry You do not have enought privilege." unless current_user && current_user.admin?
      else
        redirect_to new_user_session_path unless current_user && current_user.admin?
      end
    end
  end
end
