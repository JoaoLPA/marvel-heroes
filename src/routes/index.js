import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Initial from '../views/Initial';
import Details from '../views/Details';
import NotFound from '../views/NotFound';

const Routes = () => (
  <Switch>
    <Route path="/" component={Initial} exact />
    <Route path="/details/:id" component={Details} exact />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
