class MatchEventController < ApplicationController
    layout "in-app"
    protect_from_forgery except: :csgologs
    respond_to :json, :plain
    before_action :set_match

    def csgologs
        str = request.raw_post
        regexes = {
            :kill => /"(?<user_name>.+)[<](?<user_id>\d+)[>][<](?<steam_id>.*)[>][<](?<user_team>CT|TERRORIST|Unassigned|Spectator)[>]" \[(?<killer_x>[\-]?[0-9]+) (?<killer_y>[\-]?[0-9]+) (?<killer_z>[\-]?[0-9]+)\] killed "(?<killed_user_name>.+)[<](?<killed_user_id>\d+)[>][<](?<killed_steam_id>.*)[>][<](?<killed_user_team>CT|TERRORIST|Unassigned|Spectator)[>]" \[(?<killed_x>[\-]?[0-9]+) (?<killed_y>[\-]?[0-9]+) (?<killed_z>[\-]?[0-9]+)\] with "(?<weapon>[a-zA-Z0-9_]+)"(?<headshot>.*)/,
            :team_switch => /"(?<user_name>.+)[<](?<user_id>\d+)[>][<](?<steam_id>.*)[>]" switched from team [<](?<user_team>CT|TERRORIST|Unassigned|Spectator)[>] to [<](?<new_team>CT|TERRORIST|Unassigned|Spectator)[>]/,
            :team_scored => /Team "(?<team>CT|TERRORIST)" scored "(?<score>\d+)" with "(?<players>\d+)" players/,
            :game_over => /Game Over/,
          }
        str.split("\n").each do |line| 
            regexes.each do |event_type, regex |
                m = line.match(regex)                
                if m
                  parse_score if event_type.to_s == "game_over"
                  MatchEvent.create({
                      :event_type => event_type,
                      :params => m.named_captures.each { |k, v| params[k] = v.force_encoding('ISO-8859-1').encode('UTF-8') },
                      :match => @match
                  })
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

    def parse_score
      puts " *********lets parse the score ******** "
      last_switch = MatchEvent.where('match_id = ? and event_type = ? ', @match.id, 'team_switch').last
      last_scores = MatchEvent.where('match_id = ? and event_type = ? ', @match.id, 'team_scored').last(2)
      team = Team.joins(:users).where(users: { username: last_switch.params["user_name"] }).first
      

      ct_score = last_scores[0].params["score"].to_i
      t_score = last_scores[1].params["score"].to_i
      if last_switch.params["new_team"].to_s == "CT"
        if @match.left_team.team.name == team.name
          MatchScore.create(
            left_score: ct_score,
            right_score: t_score,
            match: @match
          )
        else
          MatchScore.create(
            left_score: t_score,
            right_score: ct_score,
            match: @match
          )
        end
      else
        if @match.left_team.team.name == team.name
          MatchScore.create(
            left_score: t_score,
            right_score: ct_score,
            match: @match
          )
        else
          MatchScore.create(
            left_score: ct_score,
            right_score: t_score,
            match: @match
          )
        end
      end
    end

    private

    def set_match
      @match = Match.find(params[:id])
    end
end