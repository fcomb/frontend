import 'bootstrap-sass/assets/stylesheets/_bootstrap';
import 'babel-core/polyfill';

import React from 'react';

// react router
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';

// containers
import AppContainer from 'containers/app';
import LandingContainer from 'containers/pages/landing';

// redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

// app
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
