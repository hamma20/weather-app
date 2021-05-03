import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Weather from '../weather/Weather';

import NotFound from '../layout/NotFound';

const Routes = props => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/" component={Weather} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
