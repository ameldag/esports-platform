class Roster < ApplicationRecord
  belongs_to :team
  belongs_to :game
  has_many :requests, dependent: :destroy
  has_many :roster_users
  has_many :users, through: :roster_users
end
