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

function logger({ getState }) {
  return (next) => (action) => {
    console.group('logger');
    console.info('state: ', getState());
    console.info('dispatch: ', action);
    const returnValue = next(action);

    console.info('state: ', getState());
    console.groupEnd('logger');
    return returnValue;
  };
}

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
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
