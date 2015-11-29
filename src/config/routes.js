import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import Containers from 'containers';

export const history = createHistory();

export default () => (
  <Router history={history}>
    <Route path="/sign_in" component={Containers.Auth.SignIn} />
    <Route path="/sign_up" component={Containers.Auth.SignUp} />

    <Route component={Containers.Root}>
      <Route path="/" component={Containers.Dashboard} />

      <Route path="/containers">
        <IndexRoute component={Containers.Containers.List} />
        <Route path=":id" component={Containers.Containers.Id} />
      </Route>
    </Route>
  </Router>
);
