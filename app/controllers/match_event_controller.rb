class MatchEventController < ApplicationController
    layout "in-app"
    protect_from_forgery except: :csgologs
    respond_to :json, :plain
    before_action :set_match

    def csgologs
        str = request.raw_post
        regexes = {
            :kill => /"(?<user_name>.+)[<](?<user_id>\d+)[>][<](?<steam_id>.*)[>][<](?<user_team>CT|TERRORIST|Unassigned|Spectator)[>]" \[(?<killer_x>[\-]?[0-9]+) (?<killer_y>[\-]?[0-9]+) (?<killer_z>[\-]?[0-9]+)\] killed "(?<killed_user_name>.+)[<](?<killed_user_id>\d+)[>][<](?<killed_steam_id>.*)[>][<](?<killed_user_team>CT|TERRORIST|Unassigned|Spectator)[>]" \[(?<killed_x>[\-]?[0-9]+) (?<killed_y>[\-]?[0-9]+) (?<killed_z>[\-]?[0-9]+)\] with "(?<weapon>[a-zA-Z0-9_]+)"(?<headshot>.*)/,
            # :kill_assist => /"(?<user_name>.+)[<](?<user_id>\d+)[>][<](?<steam_id>.*)[>][<](?<user_team>CT|TERRORIST|Unassigned|Spectator)[>]" assisted killing "(?<killed_user_name>.+)[<](?<killed_user_id>\d+)[>][<](?<killed_steam_id>.*)[>][<](?<killed_user_team>CT|TERRORIST|Unassigned|Spectator)[>]"/,
            # :bombe_defused => /"(?<user_name>.+)[<](?<user_id>\d+)[>][<](?<steam_id>.*)[>][<](?<user_team>CT|TERRORIST|Unassigned|Spectator)[>]" triggered "(Begin_Bomb_Defuse_With_Kit|Begin_Bomb_Defuse_Without_Kit)"/,
            # :bombe_planted => /"(?<user_name>.+)[<](?<user_id>\d+)[>][<](?<steam_id>.*)[>][<](?<user_team>CT|TERRORIST|Unassigned|Spectator)[>]" triggered "Planted_The_Bomb"/,
            # :round_score => /\(CT "(\d+)"\) \(T "(\d+)"\)$/,
            :team_switch => /"(?<user_name>.+)[<](?<user_id>\d+)[>][<](?<steam_id>.*)[>]" switched from team [<](?<user_team>CT|TERRORIST|Unassigned|Spectator)[>] to [<](?<new_team>CT|TERRORIST|Unassigned|Spectator)[>]/,
            :team_scored => /Team "(?<team>CT|TERRORIST)" scored "(?<score>\d+)" with "(?<players>\d+)" players/,
            # :round_score => /\((?<team_ct>.+)\) \((?<team_t>.+)\)$/,
            # :remind_round_scored => /eBot triggered "Round_End_Reminder" Team "(?<team>.*)" scored "\#SFUI_Notice_(?<team_win>Terrorists_Win|CTs_Win|Target_Bombed|Target_Saved|Bomb_Defused)/,
            # :round_end => /World triggered "Round_End"/,
            # :round_start => /World triggered "Round_Start"/,
            # :round_restart => /!World triggered "Restart_Round_\((\d+)_(second|seconds)\)"!/,
            # :end_map => /Team "(?<team>.*)" triggered "SFUI_Notice_(?<team_win>.*)" \(CT "(\d+)"\) \(T "(\d+)"\)/i,
            # :round_scored => /Team "(?<team>.*)" triggered "SFUI_Notice_(?<team_win>Terrorists_Win|CTs_Win|Target_Bombed|Target_Saved|Bomb_Defused)/
        }
        str.split("\n").each do |line| 
            # puts line 
            # puts '-------------------'
            regexes.each do |event_type, regex |
                m = line.match(regex)
                if m
                    # puts event_type
                    # puts m.named_captures
                    # puts '***************'
                    # if event_type = 'round_score'
                    #   MatchEvent.create({
                    #     :event_type => event_type,
                    #     :params => m.captures,
                    #     :match => @match
                    #   })
                      # puts '&&&&&&&&&&&&&&&&&&&&&&&&&'
                      # puts event_type
                      # puts m.captures
                      # puts m.named_captures
                      # puts'&&&&&&&&&&&&&&&&&&&&&&&&&&'
                    # end
                    # if event_type = 'kill'
                    #   puts 'ééééééééééééééééééééééééé'
                    #   puts event_type
                    #   puts'éééééééééééééééééééééééééé'
                      MatchEvent.create({
                          :event_type => event_type,
                          :params => m.named_captures.each { |k, v| params[k] = v.force_encoding('ISO-8859-1').encode('UTF-8') },
                          :match => @match
                      })
                    # end
                end
            end
        end
        respond_with do |format|
              format.json {
                render :plain => "ok"
              }
              format.text {
                render :plain => "ok"
              }
            end
    end

    private

    def set_match
      @match = Match.find(params[:id])
    end
end