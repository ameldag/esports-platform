module Admin
  class TournamentsController < Admin::ApplicationController
    protect_from_forgery except: [:bracket_generator, :create]

    def bracket_generator
      @tournament = Tournament.new
    end

    def create
      ActiveRecord::Base.transaction do
        @tournament = Tournament.create(user_id: current_user.id,
                                        name: params[:name],
                                        game_id: params[:game].to_i,
                                        season_id: 1,
                                        server_id: 1)

        CreateTournamentJob.perform_later(@tournament, params[:game].to_i, params[:tournament][:stage].permit!, params[:tournament][:group].permit!, params[:tournament][:round].permit!, params[:tournament][:match].permit!)
        if @tournament.save
          redirect_to show_tournament_bracket_path(@tournament), notice: "New tournament created"
        end
        raise ActiveRecord::RecordInvalid if @tournament.nil?
      end
    end

    def find_resource(param)
      Tournament.find_by!(slug: param)
    end
  end
end
