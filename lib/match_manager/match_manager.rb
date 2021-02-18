module SeembaEsports
  class MatchManager < ActiveRecord::Base
    attr_accessor :game_name
    self.abstract_class = true

    def start_match(game_name)
      raise NotImplementedError, "Subclasses must define `start_match`."
    end
  end
end


