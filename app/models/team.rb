class Team < ApplicationRecord
  belongs_to :user
  has_many :requests

  has_one_attached :avatar
  has_one_attached :cover

  
  has_many :users_teams
  has_many :users, through: :users_teams
end
