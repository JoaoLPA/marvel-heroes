import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Initial from '../views/Initial';
import Detail from '../views/Detail';
import NotFound from '../views/NotFound';

const Routes = () => (
  <Switch>
    <Route path="/" component={Initial} exact />
    <Route path="/detail/:id" component={Detail} exact />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
