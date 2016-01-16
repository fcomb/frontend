// our god
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

// middlewares
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// utils
import { autoRehydrate } from 'redux-persist';

// router
import { history } from './history';
import { syncHistory, routeReducer } from 'redux-simple-router';

import * as localReducers from 'reducers';

const reducers = {
  ...localReducers,
  routing: routeReducer,
};

const logger = createLogger();
const reducer = combineReducers(reducers);
const routerMiddleware = syncHistory(history);

export const store = compose(
  autoRehydrate(),
  applyMiddleware(thunk, routerMiddleware, logger),
)(createStore)(reducer);
