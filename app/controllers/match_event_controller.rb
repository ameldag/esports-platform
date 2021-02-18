require "./lib/match_manager/match_manager_instantiation"

class MatchEventController < ApplicationController
    layout "in-app"
    protect_from_forgery except: :csgologs
    respond_to :json, :plain
    before_action :set_match

    def csgologs
      str = request.raw_post
      @match_manager = MatchManagerInstantiation.instantiate(@match.game)
      @save_logs = @match_manager.csgologs(str,@match)
    end

    def parse_score
      @match_manager = MatchManagerInstantiation.instantiate(@match.game)
      @parse_score = @match_manager.parse_score(@match)

    end

    private

    def set_match
      @match = Match.find(params[:id])
    end
end
