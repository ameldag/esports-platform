class Team < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged
  
  has_many :requests, dependent: :destroy

  has_one_attached :avatar, dependent: :destroy
  has_one_attached :cover, dependent: :destroy

  has_many :users
  has_many :rosters
  
end
