import React, { Component } from 'react';
import Routes, { history } from 'config/routes';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { syncReduxAndRouter } from 'redux-simple-router';

import { store } from 'config/store';
import { api } from 'config/sources';

export default class extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentWillMount() {
    persistStore(store, { whitelist: [`auth`] }, () => {
      const { auth } = store.getState();

      if (auth.token) {
        api.setHeader(`Authorization`, `Token ${auth.token}`);
      }

      syncReduxAndRouter(history, store);
      this.setState({ rehydrated: true });
    });
  }

  render() {
    if (!this.state.rehydrated) {
      return null;
    }

    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
