Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
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
