class User < ApplicationRecord
  # extend FriendlyId
  # friendly_id :username, use: :slugged
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :username, presence:true, uniqueness: true
  validates :email, presence:true, uniqueness: true
  
  belongs_to :tournament_team_participant
  has_many :requests, dependent: :destroy

  belongs_to :team
  has_many :roster_users
  has_many :rosters, through: :roster_users

  has_many :challenge_participants
  has_many :challenges, through: :challenge_participants
  
  has_one_attached :avatar, dependent: :destroy
  has_one_attached :cover, dependent: :destroy
end
