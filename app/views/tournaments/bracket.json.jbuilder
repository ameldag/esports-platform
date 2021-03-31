# participant:[{
if @tournament.rosters.count == 0
  json.participant []
else
  json.participant @tournament.rosters do |roster|
    json.id roster.id
    json.tournament_id @tournament.id
    json.name roster.name
  end
end
# }]

# stage:[{
json.stage do
  json.tournament_id @tournament.id
  json.name @tournament.stage.name
  json.type @tournament.stage.stage_type
  json.number @tournament.stage.number
end
# }]

# group:[{
if @tournament.stage.group.count == 0
  json.group []
else
  json.group @tournament.stage.group do |group|
    json.id group.id
    json.stage_id @tournament.stage_id
    json.name group.name
    json.number group.number
  end
end
# }]

# match:[{
if @tournament.match.count == 0
  json.match []
else
  json.match @tournament.match do |match|
    json.id match.id
    json.stage_id @tournament.stage_id
    json.group_id match.group_id
    json.round_id match.round_id
    json.status match.state
    json.scheduled_datetime nil
    json.planned_at match.planned_at
    json.number match.round.number

    if match.left_team
      json.opponent1 do
        json.id match.left_team.id
        json.position 2
        json.score match.left_score
        if (match.left_score && match.right_score && match.left_score < match.right_score)
          json.result "loss"
        else
          json.result "win"
        end
      end
    else
      json.opponent1 nil
    end
    if match.right_team
      json.opponent2 do
        json.id match.right_team.id
        json.position 1
        json.score match.right_score
        if (match.left_score && match.right_score && match.right_score > match.left_score)
          json.result "win"
        else
          json.result "loss"
        end
      end
    else
      json.opponent2 nil
    end
  end
end
# }]

# round:[{
@tournament.stage.group.each do |group|
  if group.round == nil
    json.round []
  else
    json.round group.round do |round|
      json.number round.number
      json.stage_id round.stage_id
      json.group_id round.group_id
    end
  end
end
#}]

# match_game:[{
json.match_game []
#}]
