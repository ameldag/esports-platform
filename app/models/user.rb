class User < ApplicationRecord
  # extend FriendlyId
  # friendly_id :username, use: :slugged
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :username, uniqueness: true

  has_many :requests, dependent: :destroy

  belongs_to :team
  
  has_one_attached :avatar, dependent: :destroy
  has_one_attached :cover, dependent: :destroy
end
