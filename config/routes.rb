Rails.application.routes.draw do
  root "home#show", page: "show"
  get "home" => "home#show"
  get "home/:page" => "home#show"
  get 'projects' => "home#projects" #links to js.erb file
  resources :posts
end
