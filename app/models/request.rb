class Request < ApplicationRecord
  belongs_to :user
  belongs_to :team
  belongs_to :roster
end
