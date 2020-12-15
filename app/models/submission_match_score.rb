class SubmissionMatchScore < ApplicationRecord
  belongs_to :match
  belongs_to :user
  belongs_to :roster
  has_one_attached :image, dependent: :destroy
end