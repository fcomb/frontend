import React from 'react';

// react router
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

// containers
import Containers from 'containers';

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
      <Route component={Containers.Main}>
        <Route path="/" component={Containers.Landing} />

        <Route path="/sign_in" component={Containers.User.SignIn} />
        <Route path="/sign_up" component={Containers.User.SignUp} />

        <Route path="/containers">
          <IndexRoute component={Containers.Containers.List} />
          <Route path=":id" component={Containers.Containers.Id} />
        </Route>

        <Route path="/settings">
          <Route path="profile" />
        </Route>
      </Route>
    </Router>
  </Provider>
);
