// our god
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

// middlewares
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// utils
import { autoRehydrate } from 'redux-persist';

// 3rd-party reducers
import { routeReducer } from 'redux-simple-router';

import * as localReducers from 'reducers';

const reducers = {
  ...localReducers,
  routing: routeReducer,
};

const logger = createLogger();
const reducer = combineReducers(reducers);

export const store = compose(
  autoRehydrate(),
  applyMiddleware(thunk, logger),
)(createStore)(reducer);
