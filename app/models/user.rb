class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :requests, dependent: :destroy
  
  has_many :users_teams, dependent: :destroy
  has_many :teams, through: :users_teams, dependent: :destroy
end
