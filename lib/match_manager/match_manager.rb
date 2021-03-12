module SeembaEsports
  class MatchManager < ActiveRecord::Base
    attr_accessor :game_name, :str, :match
    self.abstract_class = true

    def start_match(game_name)
      raise NotImplementedError, "Subclasses must define `start_match`."
    end
    def csgologs(str,match)
      raise NotImplementedError, "Subclasses must define `csgologs`."
    end
    def parse_score(match)
      raise NotImplementedError, "Subclasses must define `parse_score`."
    end
  end
end


