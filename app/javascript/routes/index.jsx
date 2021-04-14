import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Articles from '../components/Articles';
import Article from '../components/Article';
import UpdateArticle from '../components/UpdateArticle';
import ArticleForm from '../components/ArticleForm';
import ManageArticles from '../components/ManageArticles';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Articles} />
    <Route path="/articles/:id" component={Article} />
    <Route path="/article/create" component={ArticleForm} />
    <Route path="/article/edit/:id" component={UpdateArticle} />
    <Route path="/manage" component={ManageArticles} />
  </Switch>
);

export default Routes;
