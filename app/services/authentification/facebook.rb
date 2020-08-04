require 'net/http'

module Authentication
  class Facebook
    FACEBOOK_URL = 'https://graph.facebook.com/v7.0/'
    FACEBOOK_USER_FIELDS = 'id,name,first_name,last_name,email'

    attr_reader :provider, :access_token, :expires_at
    def initialize(access_token, expiration_time)
      @access_token = access_token
      @provider = "facebook"
      @expires_at = expiration_time.present? ? expiration_time.to_time : nil
    end

    def uid
      user_data['id']
    end

    def first_name
      user_data['first_name']
    end

    def last_name
      user_data['last_name']
    end

    def email
      user_data['email']
    end

    private

    def user_data
      @user_data ||= begin
        response = Net::HTTP.get_response(request_uri)
        JSON.parse(response.body)
      end
    end

    def request_uri
      URI.parse("#{FACEBOOK_URL}me?access_token=#{@access_token}&fields=#{FACEBOOK_USER_FIELDS}")
    end
  end
end
