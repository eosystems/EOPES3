Rails.application.routes.draw do
  root to: 'estimates#index'

  get 'client/*path', to: 'estimates#index'

  resources :estimates
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
