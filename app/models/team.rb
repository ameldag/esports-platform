class Team < ApplicationRecord
  belongs_to :user
  has_one_attached :avatar
  has_one_attached :cover
end
