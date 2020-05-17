class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :username, uniqueness: true

  has_many :requests, dependent: :destroy
  
  has_many :users_teams, dependent: :destroy
  has_many :teams, through: :users_teams, dependent: :destroy
  
  
  extend FriendlyId
  friendly_id :username, use: :slugged

  has_one_attached :avatar, dependent: :destroy
  has_one_attached :cover, dependent: :destroy
end
