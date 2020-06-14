Rails.application.routes.draw do




  get 'tournaments/index'
  # get 'tournaments/show'
  # get 'tournaments/subscribe'
  # games routes
  get 'game/:id', to: "game#show", as: "show_game"
  get 'game/:id/tournaments', to: "game#tournaments", as: "show_game_tournaments"

  # admin routes
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  # tournaments routes
  get 'tournament/:id', to: "tournaments#show", as: "show_tournament"
  get 'tournament/:id/bracket', to: "tournaments#bracket", as: "show_tournament_bracket"
  get 'tournament/:id/matches', to: "tournaments#matches", as: "show_tournament_matches"
  get 'tournament/:id/subscribe', to: "tournaments#subscribe", as: "subscribe_tournament_matches"

  # teams routes
  get 'teams', to: "team#index", as: "teams"
  get 'team/edit/:id', to: "team#edit", as: "edit_team"
  get 'team/new', to: "team#new", as: "new_team"
  post 'team/new', to: "team#create", as: 'send_new_team'
  get 'team/join/:team_id', to: "team#join_request", as: "team_join"
  get 'team/request/:request_id', to: "team#team_request_answer", as: "team_request_answer"
  get 'team/:id', to: "team#show", as: "show_team"
  get 'team/:id/stats', to: "team#stats", as: "show_team_stats"
  get 'team/:id/members', to: "team#members", as: "show_team_members"
  get 'team/:id/requests', to: "team#requests", as: "show_team_requests"
  get 'team/:id/quit', to: "team#quit", as: "team_quit"

  
  # Roster routes
  
namespace :team do
  get ':team_id/roster/:id', to: "rosters#show", as: "show_roster"
  get ':team_id/rosters', to: "rosters#list", as: "rosters"
  get 'roster/:id/join', to: "rosters#join", as:"join_roster"
  get 'roster/:id/quit', to: "rosters#quit", as:"quit_roster"
  get '/:user_id/roster/:id/add', to: "rosters#add_user_to_roster", as:"add_roster"
  get 'roster/:id/edit', to: "rosters#edit", as: "edit_roster"
  put 'roster/:id/edit', to: "rosters#update", as: "update_roster"
  get 'roster/new', to: "rosters#new", as: "new_roster"
  post 'roster/new', to: "rosters#create", as: "send_new_roster"
  get 'roster/:id/delete', to: "rosters#delete", as: "delete_roster"
end

# request routes
get 'request/:id/accept', to: "request#accept", as: 'request_accept'
get 'request/:id/reject', to: "request#reject", as: 'request_reject'

  # users routes
  devise_for :users
  get 'user/:id/edit', to: "users#edit", as: "edit_user"
  patch 'user/:id/edit', to: "users#update", as: "update_user"

  get 'pages/index'

  root 'pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
