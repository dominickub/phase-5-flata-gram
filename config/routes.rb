Rails.application.routes.draw do
  
  resources :messages
  resources :follows
  resources :saved_posts
  resources :likes
  resources :comments
  resources :posts
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"
  get 'post', to: 'posts#show'
  get 'post', to: 'posts#index'
  post '/posts', to: 'posts#create'
  get 'likes', to: 'likes#index'
  delete '/posts/post.id', to: 'posts#destroy'

end
