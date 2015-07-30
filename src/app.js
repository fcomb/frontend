import 'babel-core/polyfill';

import React from 'react';
import Landing from 'views/pages/landing';
import store from 'store';

React.render(<Landing />, document.getElementById('app'));

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
