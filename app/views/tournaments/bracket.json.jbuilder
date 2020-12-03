# participant:[{
json.participant @tournament.rosters do |roster|
  json.id roster.id
  json.tournament_id @tournament.id
  json.name roster.name
end
# }]

# stage:[{
json.stage do
  json.tournament_id @tournament.id
  json.name @tournament.name
  json.type "single_elimination"
  json.number 1
end
# }]

# group:[{
json.group do
  json.id 0
  json.stage_id @tournament.id
  json.name "winner Bracket"
  json.number 1
end
# }]

# match:[{
if @tournament.match.count == 0
  json.match []
else
  json.match @tournament.match do |match|
    json.id match.id
    json.stage_id 0
    json.group_id 0
    json.round_id match.round
    json.status match.state
    json.scheduled_datetime nil
    json.planned_at match.planned_at
    json.number match.round

    if match.left_team
      json.opponent1 do
        json.id  match.left_team.id
        json.position 2
        json.score match.left_score
        json.result "loss"
      end
      else
        json.opponent1 nil
    end
    if match.right_team
      json.opponent2 do
        json.id match.right_team.id
        json.position 1
        json.score match.right_score
        json.result "win"
      end
    else
      json.opponent2 nil
    end
  end
end
# }]

# round:[{
json.round @tournament.match do |round|
  json.number round.round
  json.stage_id 1
  json.group_id 1
end
#}]

# match_game:[{
json.match_game []
#}]
