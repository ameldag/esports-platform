class Stage < ApplicationRecord
  has_many :group
  belongs_to :tournament
end
