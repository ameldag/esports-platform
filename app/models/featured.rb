class Featured < ApplicationRecord
  belongs_to :tournament
  
  has_one_attached :cover, dependent: :destroy
end
