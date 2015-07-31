import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from 'reducers';

import Landing from './pages/landing';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Landing /> }
      </Provider>
    );
  }
}
