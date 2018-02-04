Rails.application.routes.draw do
  resources :reviews
  root to: 'reviews#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
