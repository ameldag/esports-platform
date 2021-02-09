require_all "./lib/match_manager/"

class MatchManagerInstantiation
  def self.instantiate(game)
    case game.name
    when "CSGO"
      Object.const_get "CsgoMatchManager"
    when "Dota2"
      Object.const_get "DotaMatchManager"
    else
      puts "it was something else"
    end
  end
end
