# Watches Blog

A blog of watches with local and remote posts.

## Installation

### Install Rails dependencies
```
bundle install
```

### Install Javascript dependencies
```
yarn install
```

### Create database and run migrations
```
rails db:create
rails db:migrate
```

### Seed the database with fake data
```
rails db:seed
```

### Add your newsapi.org key

Open the api service file `app/javascript/services/api.js` and edit the line NEWS_API_KEY with your api key:
```
const NEWS_API_KEY = 'YOUR_API_KEY';
```

## Usage

### Run a development local server
```
rails s
```

### Run linter and fix errors
```
yarn lint
```

### Articles CRUD
Click on "Manager" on the navbar.

There you can:
1. Add new articles.
2. Edit existing articles.
3. Delete articles.

### View an article in detail
In the articles list just click on any article.