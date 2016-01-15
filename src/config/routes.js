import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import { createHistory } from 'history';

import Containers from 'containers';
import { store } from 'config/store';

export const history = createHistory();

function isLoggedin() {
  const state = store.getState();
  return !!state.auth.token;
}

export default () => (
  <Router history={history}>
    <Route onEnter={(state, replace) => (isLoggedin() && replace(null, `/`))}>
      <Route path="/sign_in" component={Containers.Auth.SignIn} />
      <Route path="/sign_up" component={Containers.Auth.SignUp} />
    </Route>

    <Route component={Containers.Root} onEnter={(state, replace) => (!isLoggedin() && replace(null, `/sign_in`))}>
      <Redirect from="/" to="/nodes" />

      <Route path="/nodes">
        <IndexRoute component={Containers.Nodes.List} />
      </Route>

      <Route path="/apps">
        <IndexRoute component={Containers.Apps.List} />

        <Route path="create" component={Containers.Apps.Create} />
        <Route path=":id" component={Containers.Apps.Show} />
      </Route>
    </Route>
  </Router>
);
