import React from 'react';
import { Provider } from 'react-redux';

import store from 'config/store';
import Routes from 'config/routes';

export default () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
