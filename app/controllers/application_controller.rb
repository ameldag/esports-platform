class ApplicationController < ActionController::Base
    
    # Necessary include if you plan on access controller instance
    # in Procs passed to #tracked method in your models
    include PublicActivity::StoreController
   
    before_action :set_locale
    before_action :configure_permitted_parameters, if: :devise_controller?
    before_action :set_raven_context
    
    protected

    NotAuthorized = Class.new(ActionController::RoutingError)
  
    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :first_name, :last_name, :avatar, :slug])
    end

    def exception_redirect(route, err)
      respond_to do |format|
        format.html { redirect_to route, alert: err }
      end
    end

    def check_user_team
      unless current_user.team.present?
        respond_to do |format|
          format.html { redirect_to root_path, alert: "User does not have a team" }
        end
      end
    end
  
    private
  
    def set_raven_context
      Raven.user_context(id: session[:current_user_id]) # or anything else in session
      Raven.extra_context(params: params.to_unsafe_h, url: request.url)
    end

    def set_locale
      I18n.locale = params[:locale] if params[:locale].present? #/blog?locale=fr
    end

    def default_url_options
      { locale: I18n.locale }
    end
end
