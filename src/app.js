import 'bootstrap-sass/assets/stylesheets/_bootstrap';

import 'babel-core/polyfill';

import React from 'react';
import { Router, Route } from 'react-router';
import { createStore, combineReducers } from 'redux';

import { Provider } from 'react-redux';
import { history } from 'react-router/lib/BrowserHistory';
import reducers from 'reducers';

import AppContainer from 'containers/app';
import LandingContainer from 'containers/pages/landing';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

React.render((
  <Provider store={store}>
    {() =>
      <Router history={history}>
        <Route component={AppContainer}>
          <Route path="/" component={LandingContainer} />

          {/* <Route path="/users">
            <Route path="/sign_in" component={AuthContainer} />
            <Route path="/sign_up" component={AuthContainer} />
          </Route> */}
        </Route>
      </Router>
    }
  </Provider>
), document.getElementById('app'));
