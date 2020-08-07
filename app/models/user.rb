class User < ApplicationRecord
  # extend FriendlyId
  # friendly_id :username, use: :slugged
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # devise :omniauthable, omniauth_providers: %i[facebook, google_oauth2 ]  
  devise :omniauthable, :omniauth_providers => [:facebook , :google_oauth2, :twitch]

  validates :username, presence:true, uniqueness: true
  validates :email, presence:true, uniqueness: true
  
  belongs_to :tournament_team_participant
  has_many :requests, dependent: :destroy

  belongs_to :team
  has_many :roster_users
  has_many :rosters, through: :roster_users

  has_many :challenge_participants
  has_many :challenges, through: :challenge_participants
  has_many :services
  has_one_attached :avatar, dependent: :destroy
  has_one_attached :cover, dependent: :destroy


  # def self.from_omniauth(auth)
  #   where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
  #     user.email = auth.info.email
  #     user.password = Devise.friendly_token[0, 20]
  #     user.first_name = auth.first_name   # assuming the user model has a name
  #     user.last_name = auth.last_name
  #     # user.image = auth.info.image # assuming the user model has an image
  #     # If you are using confirmable and the provider(s) you use validate emails, 
  #     # uncomment the line below to skip the confirmation emails.
  #     # user.skip_confirmation!
  #   end
  # end

  # def self.new_with_session(params, session)
  #   super.tap do |user|
  #     if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
  #       user.email = data["email"] if user.email.blank?
  #     end
  #   end
  # end

  def self.from_omniauth(access_token)
    data = access_token.info
    user = User.where(email: data['email']).first

    # Uncomment the section below if you want users to be created if they don't exist
    unless user
        user = User.create(name: data['name'],
           email: data['email'],
           password: Devise.friendly_token[0,20]
        )
    end
    user
end
end
