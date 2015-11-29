import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducers from 'reducers';

const reducer = combineReducers(reducers);
const logger = createLogger();

const store = compose(
  // autoRehydrate(),
  applyMiddleware(thunk, logger),
)(createStore)(reducer);

export default store;
