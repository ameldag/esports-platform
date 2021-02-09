require "rcon"
require "./lib/match_manager/match_manager"

class CsgoMatchManager < SeembaEsports::MatchManager
  game_name = "CSGO"
  def self.start_match(match)
    client = Rcon::Client.new(host: match.server.hostname, port: match.server.port.to_i, password: match.server.rcon_password)
    client.authenticate!
    client.execute("cvarlist")
    client.execute("log on")
    puts "test csgo ************"
    # client.execute("logaddress_add_http " "\"https://seemba-esports.herokuapp.com/csgolog/" + match.id.to_s + "\"")
    # client.execute("mp_teamname_1 " + match.left_team.name)
    # client.execute("mp_teamname_2 " + match.right_team.name)
    # client.execute("bot_add_t")
  end
end