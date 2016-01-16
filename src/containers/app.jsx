import React, { Component } from 'react';
import Routes from 'config/routes';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import { store } from 'config/store';
import { setHTTPAuth } from 'utils/setHTTPAuth';

import * as UsersActions from 'actions/users';

export default class extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentWillMount() {
    persistStore(store, { whitelist: [`auth`, `users`] }, () => {
      const { auth } = store.getState();

      if (auth.token) {
        setHTTPAuth(auth.token);

        store.dispatch(UsersActions.loadUser(`me`)).then(() => this.setState({ rehydrated: true }));
      } else {
        this.setState({ rehydrated: true });
      }
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
