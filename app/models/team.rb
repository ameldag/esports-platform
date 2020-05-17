class Team < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged
  
  belongs_to :user
  has_many :requests, dependent: :destroy

  has_one_attached :avatar, dependent: :destroy
  has_one_attached :cover, dependent: :destroy

  
  has_many :users_teams, dependent: :destroy
  has_many :users, through: :users_teams
end
