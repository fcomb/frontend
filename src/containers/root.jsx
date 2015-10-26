import React from 'react';

// react router
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

// containers
import MainContainer from 'containers/main';
import LandingContainer from 'containers/pages/landing';

// redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from 'reducers';

const history = createHistory();
const reducer = combineReducers(reducers);
const store = compose(
  applyMiddleware(thunk, logger),
)(createStore)(reducer);

// app
export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Route component={MainContainer}>
        <Route path="/" component={LandingContainer} />

        {/* <Route path="/users">
          <Route path="/sign_in" component={AuthContainer} />
          <Route path="/sign_up" component={AuthContainer} />
        </Route> */}
      </Route>
    </Router>
  </Provider>
);
