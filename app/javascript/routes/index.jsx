import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Articles from '../components/Articles';
import Article from '../components/Article';
import ManageArticles from '../components/ManageArticles';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Articles} />
    <Route path="/articles/:id" component={Article} />
    <Route path="/manage" component={ManageArticles} />
  </Switch>
);

export default Routes;
