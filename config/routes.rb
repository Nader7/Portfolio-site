Rails.application.routes.draw do
  root "home#show", page: "show"
  get "home" => "home#show"
  get "home/:page" => "home#show"
  resources :posts
end
