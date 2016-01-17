import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';

import Containers from 'containers';
import { store } from 'config/store';
import { history } from 'config/history';

const isLoggedin = () => !!store.getState().auth.token;

export default () => (
  <Router history={history}>
    <Route onEnter={(state, replace) => (isLoggedin() && replace(null, `/`))}>
      <Route path="/sign_in" component={Containers.Auth.SignIn} />
      <Route path="/sign_up" component={Containers.Auth.SignUp} />
    </Route>

    <Route component={Containers.Root} onEnter={(state, replace) => (!isLoggedin() && replace(null, `/sign_in`))}>
      <Redirect from="/" to="/nodes" />

      <Route path="/settings" component={Containers.Settings.Root}>
        <Redirect from="/settings/account" to="/settings/account/profile" />
        <Route path="account">
          <Route path="profile" component={Containers.Settings.Account.Profile} />

          {/* <Route path="billing" component={Containers.Settings.Account.Billing} />
          <Route path="referrals" component={Containers.Settings.Account.Referrals} />
          <Route path="security" component={Containers.Settings.Account.Security} /> */}
        </Route>
      </Route>

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
