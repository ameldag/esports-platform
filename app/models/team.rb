class Team < ApplicationRecord
  include PublicActivity::Common
  # tracked except: :update, owner: ->(controller, model) { controller && controller.current_user}
  extend FriendlyId
  friendly_id :name, use: :slugged
  validates :name, presence: true
  
  has_many :requests, dependent: :destroy

  has_one_attached :avatar, dependent: :destroy
  has_one_attached :cover, dependent: :destroy

  has_many :users
  has_many :rosters

  def get_awards
    Award.includes(:roster => :team).where(roster: { teams: { id: self.id } })
  end

end
