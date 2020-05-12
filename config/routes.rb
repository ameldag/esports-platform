Rails.application.routes.draw do
  # games routes
  get 'game/:id', to: "game#show", as: "show_game"

  # admin routes
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  # teams routes
  get 'teams', to: "team#index", as: "teams"
  get 'team/:id', to: "team#show", as: "show_team"
  get 'team/edit', to: "team#edit", as: "edit_team"
  get 'team/new', to: "team#new", as: "new_team"
  post 'team/new', to: "team#create"

  devise_for :users
  get 'pages/index'

  root 'pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
