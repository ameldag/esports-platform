require "rcon"
require "./lib/match_manager/match_manager"

class CsgoMatchManager < SeembaEsports::MatchManager
  game_name = "CSGO"
  def self.start_match(match)
    client = Rcon::Client.new(host:"seemba-esports.herokuapp.com", port:27015, password: "xxx")
    client.authenticate!
    client.execute("cvarlist")
    client.execute("log on")
    client.execute("logaddress_add_http ""\"https://seemba-esports.herokuapp.com/csgolog/" + match.id.to_s + "\"")
    client.execute("mp_teamname_1 " + match.left_team.name)
    client.execute("mp_teamname_2 " + match.right_team.name)
    client.execute("bot_add_t")
    puts "hhhhh"
  end
end

# https://seemba-esports.herokuapp.com/
# logaddress_add_http "http://172.20.51:3000/csgolog/376"
# "logaddress_add_http ""\"http://172.18.0.1:3000/csgolog/"+"5\""
# "logaddress_add_http ""\"https://seemba-esports.herokuapp.com/csgolog/" + "5\""
#client.execute("logaddress_add_http " "\"https://172.18.0.1:3000/csgolog/" + match.id.to_s + "\"")
# logaddress_add_http "https://seemba-esports.herokuapp.com/"
