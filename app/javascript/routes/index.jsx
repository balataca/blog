import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Articles from '../components/Articles';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Articles} />
  </Switch>
);

export default Routes;
