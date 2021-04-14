Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'articles/index'
      post 'articles/create'
      get 'articles/:id', to: 'articles#show'
      delete 'articles/:id', to: 'articles#destroy'
    end
  end

  root 'home#index'
  get '/*path' => 'home#index', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
end
