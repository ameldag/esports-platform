require "./lib/match_manager/match_manager_instantiation"

class ServerController < ApplicationController
  before_action :set_match
  respond_to :plain

  def start_match
    if @match.state == "started"
      @server = Server.find(@match.server_id)

      if @server.is_rcon
        if @server.is_ready
          @match_manager = MatchManagerInstantiation.instantiate(@match.game)
          @start_match = @match_manager.start_match(@match)

          respond_with do |format|
            format.text {
              render :plain => "ok"
            }
          end
        end
      end
    end
  end

  private

  def set_match
    @match = Match.find(params[:id])
  end
end
