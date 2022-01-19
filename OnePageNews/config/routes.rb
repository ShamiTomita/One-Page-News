Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :articles, only: [:index, :show]
      resources :users, only: [:create, :index, :show]
    end
  end
end
