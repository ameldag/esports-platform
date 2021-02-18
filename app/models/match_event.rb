class MatchEvent < ApplicationRecord
  belongs_to :match, :class_name => "Match"
end
