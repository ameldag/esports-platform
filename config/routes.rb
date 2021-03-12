Rails.application.routes.draw do
  get "tournaments", to: "tournaments#index", as: "tournaments"
  get "tournaments/:game_id", to: "tournaments#index", as: "game_tournaments"
  get "tournaments/subscribe"
  get "tournament/new", to: "tournaments#new", as: "new_tournament"
  post "tournament/bracket_generator", to: "tournaments#bracket_generator", as: "bracket_generator"
  # games routes
  get "game/:id", to: "game#show", as: "show_game"
  get "game/:id/tournaments/past", to: "game#past_tournament", as: "past_tournament"

  # admin routes
  mount RailsAdmin::Engine => "/admin", as: "rails_admin"

  # tournaments routes
  get "tournament/:id", to: "tournaments#show", as: "show_tournament"
  get "tournament/:id/bracket", to: "tournaments#bracket", as: "show_tournament_bracket"
  get "tournament/:id/matches", to: "tournaments#matches", as: "show_tournament_matches"
  get "tournament/:id/subscribe", to: "tournaments#subscribe", as: "subscribe_tournament_matches"
  get "tournament/:id/confirm_subscribtion", to: "tournaments#confirm_subscribtion", as: "confirm_subscribtion_tournament_matches"
  get "tournament/:id/participation", to: "tournaments#participation", as: "participation_tournament_matches"
  # matches routes
  get "tournament/:id/matches/ongoing", to: "tournaments#ongoing_match", as: "ongoing_match"
  get "tournament/:id/matches/past", to: "tournaments#past_match", as: "past_match"
  get "tournament/:id/match/:match_id", to: "tournaments#match_details", as: "match_details"
  get "tournament/:id/match/:match_id/score_submission", to: "tournaments#submit_score", as: "submit_score"
  post "tournament/:id/match/:match_id/score_submission", to: "tournaments#score_submission", as: "score_submission"

  #challenges routes
  get ":game_id/challenge", to: "challenge#challenges", as: "challenges"
  get ":game_id/challenge/:id/show", to: "challenge#show", as: "show_challenge"
  get ":game_id/challenge/join/:slots_per_team/:kind", to: "challenge#join", as: "join_challenge"
  get ":game_id/challenge/:id/compose/:invited_id", to: "challenge#compose_team", as: "compose_team_challenge"
  get ":game_id/challenge/:id/confirm/:confirmation_code", to: "challenge#confirm_challenge_invitation", as: "confirm_challenge_invitation"
  get ":game_id/challenge/:id/participants", to: "challenge#participants", as: "participants_challenge"
  get ":game_id/challenge/:id/feed", to: "challenge#feed", as: "feed_challenge"
  get ":game_id/challenge/:id/stats", to: "challenge#stats", as: "show_challenge_stats"
  get ":game_id/challenge/:id/members", to: "challenge#members", as: "show_challenge_members"

  # teams routes
  get "teams", to: "team#index", as: "teams"
  get "team/edit/:id", to: "team#edit", as: "edit_team"
  get "team/new", to: "team#new", as: "new_team"
  post "team/new", to: "team#create", as: "send_new_team"
  get "team/join/:team_id", to: "team#join_request", as: "team_join"
  post "team/request/:request_id", to: "team#team_request_answer", as: "team_request_answer"
  get "team/:id", to: "team#show", as: "show_team"
  get "team/:id/stats", to: "team#stats", as: "show_team_stats"
  get "team/:id/awards", to: "team#awards", as: "show_team_awards"
  get "team/:id/members", to: "team#members", as: "show_team_members"
  get "team/:id/requests", to: "team#requests", as: "show_team_requests"
  get "team/:id/quit", to: "team#quit", as: "team_quit"
  get "team/:id/giveownership/:user_id", to: "team#give_ownerShip", as: "give_ownerShip"
  # Roster routes

  namespace :team do
    get ":team_id/roster/:id", to: "rosters#show", as: "show_roster"
    get ":team_id/roster/:id/join", to: "rosters#join", as: "join_roster"
    get ":team_id/rosters", to: "rosters#list", as: "rosters"
    get ":team_id/roster/:id/quit", to: "rosters#quit", as: "quit_roster"
    get "/:user_id/roster/:id/add", to: "rosters#add_user_to_roster", as: "add_roster"
    get "roster/:id/edit", to: "rosters#edit", as: "edit_roster"
    put "roster/:id/edit", to: "rosters#update", as: "update_roster"
    get "roster/new", to: "rosters#new", as: "new_roster"
    post "roster/new", to: "rosters#create", as: "send_new_roster"
    get "roster/:id/delete", to: "rosters#delete", as: "delete_roster"
  end

  # request routes
  get "request/:id/accept", to: "request#accept", as: "request_accept"
  get "request/:id/reject", to: "request#reject", as: "request_reject"

  # users routes

  get "user/:id/edit", to: "users#edit", as: "edit_user"
  patch "user/:id/edit", to: "users#update", as: "update_user"

  get "user/:id", to: "users#show", as: "show_user"
  get "user/:id/tournaments", to: "users#tournaments", as: "show_user_tournaments"

  # logs csgo

  root "pages#index"
  post "csgolog/:id", to: "match_event#csgologs", defaults: { format: "text" }

  get "start-match/:id", to: "server#start_match", defaults: { format: "text" }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  devise_for :users, controllers: {
                       omniauth_callbacks: "users/omniauth_callbacks",
                     }
end
