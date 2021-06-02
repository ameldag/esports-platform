require "administrate/custom_dashboard"

class BracketGeneratorDashboard < Administrate::CustomDashboard
  resources "Bracket_generator" # used by administrate in the views
end
