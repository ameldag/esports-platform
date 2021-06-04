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
                                        season_id: 1)
        params[:tournament][:stage].each do |key, value|
          stage_id = value[:id]
          stage = Stage.create(stage_type: value[:type].to_s, tournament: @tournament, name: value[:name].to_s, number: value[:number].to_i)
          params[:tournament][:group].each do |key, value|
            group_id = value[:id]
            if (stage_id == value[:stage_id])
              group = Group.create(number: value[:number], stage: stage)
              params[:tournament][:round].each do |key, value|
                round_id = value[:id]
                if (group_id == value[:group_id])
                  round = Round.create(number: value[:number].to_i, group: group, stage: stage)

                  params[:tournament][:match].each do |key, value|
                    if (stage_id == value[:stage_id] && group_id == value[:group_id] && round_id == value[:round_id])
                      match = Match.create(tournament: @tournament,
                                           left_team: nil,
                                           right_team: nil,
                                           stage: stage,
                                           group: group,
                                           round: round,
                                           game_id: params[:game].to_i)
                      match_score = MatchScore.create(
                        left_score: 0,
                        right_score: 0,
                        match: match,
                      )
                      # end
                    end
                  end
                end
              end
            end
          end
        end

        if @tournament.save
          # @tournament.add_server_matches
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
