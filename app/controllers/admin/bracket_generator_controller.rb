module Admin
  class BracketGeneratorController < Admin::ApplicationController
    def bracket_generator
      @tournament = Tournament.new
    end
  end
end
