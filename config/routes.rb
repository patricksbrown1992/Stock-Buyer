Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update] 
    resources :users, only: [:show] do
      resources :businesses, only: [:index, :show, :create, :update, :destroy]

    end
    resource :session, only: [:destroy, :create]
    resources :transactions, only: [:create, :index, :show]
  end
end
