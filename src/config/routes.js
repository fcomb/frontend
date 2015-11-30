import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import { createHistory } from 'history';

import Containers from 'containers';

export const history = createHistory();

export default () => (
  <Router history={history}>
    <Route path="/sign_in" component={Containers.Auth.SignIn} />
    <Route path="/sign_up" component={Containers.Auth.SignUp} />

    <Route component={Containers.Root}>
      <Redirect from="/" to="/containers" />

      <Route path="/containers">
        <IndexRoute component={Containers.Containers.List} />
        <Route path=":id" component={Containers.Containers.Id} />
      </Route>
    </Route>
  </Router>
);
