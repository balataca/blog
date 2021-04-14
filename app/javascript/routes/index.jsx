import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Articles from '../components/Articles';
import Article from '../components/Article';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Articles} />
    <Route path="/articles/:id" component={Article} />
  </Switch>
);

export default Routes;
