Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  get 'team/index'
  get 'team/show'
  get 'team/edit'
  get 'team/new'
  post 'team/new', to: "team#create"
  
  devise_for :users
  get 'pages/index'

  root 'pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
