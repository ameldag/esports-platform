class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
    protect_from_forgery with: :null_session
    before_action :set_service
    before_action :set_user

    attr_reader :service, :user

    def facebook
      handle_auth "Facebook"
    end

    def twitter
      handle_auth "Twitter"
    end

    def github
      handle_auth "Github"
    end

    def google_oauth2
      handle_auth "Google"
    end

    def twitch
      handle_auth "Twitch"
    end
    def steam
      handle_auth "Steam"
    end

    # def google_oauth2
    #   # You need to implement the method below in your model (e.g. app/models/user.rb)
    #   @user = User.from_omniauth(request.env['omniauth.auth'])

    #   if @user.persisted?
    #     flash[:notice] = I18n.t 'devise.omniauth_callbacks.success', kind: 'Google'
    #     sign_in_and_redirect @user, event: :authentication
    #   else
    #     session['devise.google_data'] = request.env['omniauth.auth'].except('extra') # Removing extra as it can overflow some session stores
    #     redirect_to new_user_registration_url, alert: @user.errors.full_messages.join("\n")
    #   end
    # end

    private

    def handle_auth(kind)
      if service.present?
        service.update(service_attrs)
      else
        user.services.create(service_attrs)
      end

      if user_signed_in?
        flash[:notice] = "Your #{kind} account was connected."
        redirect_to edit_user_registration_path
      else
        sign_in_and_redirect user, event: :authentication
        set_flash_message :notice, :success, kind: kind
      end
    end

    def auth
      request.env['omniauth.auth']
    end

    def set_service
      @service = Service.where(provider: auth.provider, uid: auth.uid).first
    end

    def set_user
      if user_signed_in?
        @user = current_user
      elsif service.present?
        @user = service.user
      elsif User.where(email: auth.info.email).any?
        # 5. User is logged out and they login to a new account which doesn't match their old one
        flash[:alert] = "An account with this email already exists. Please sign in with that account before connecting your #{auth.provider.titleize} account."
        redirect_to new_user_session_path
      else
        @user = create_user
      end
    end

    def service_attrs
      expires_at = auth.credentials.expires_at.present? ? Time.at(auth.credentials.expires_at) : nil
      {
          provider: auth.provider,
          uid: auth.uid,
          expires_at: expires_at,
          access_token: auth.credentials.token,
          access_token_secret: auth.credentials.secret,
      }
    end

    def create_user
      name = auth.info.name
      email = auth.info.email
      
      email = auth.uid + "@steamcommunity.com" if auth.provider == "steam" 
      
      User.create(
        email: email,
        username: name,
        password: Devise.friendly_token[0,20]
      )

    end
end