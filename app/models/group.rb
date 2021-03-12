class Group < ApplicationRecord
  belongs_to :stage
  has_many :round
end
