class CreateTournamentJob < ApplicationJob
  queue_as :default

  def perform(tournament, game, stages, groups, rounds, matches)
    stages.each do |key, value|
      stage_id = value[:id]
      stage = Stage.create(stage_type: value[:type].to_s, tournament: tournament, name: value[:name].to_s, number: value[:number].to_i)
      groups.each do |key, value|
        group_id = value[:id]
        if (stage_id == value[:stage_id])
          group = Group.create(number: value[:number], stage: stage)
          rounds.each do |key, value|
            round_id = value[:id]
            if (group_id == value[:group_id])
              round = Round.create(number: value[:number].to_i, group: group, stage: stage)

              matches.each do |key, value|
                if (stage_id == value[:stage_id] && group_id == value[:group_id] && round_id == value[:round_id])
                  match = Match.create(tournament: tournament,
                                       left_team: nil,
                                       right_team: nil,
                                       stage: stage,
                                       group: group,
                                       round: round,
                                       game_id: game)
                  match_score = MatchScore.create(
                    left_score: 0,
                    right_score: 0,
                    match: match,
                  )
                end
              end
            end
          end
        end
      end
    end
  end
end
