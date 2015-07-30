import { createStore } from 'redux';
import counter from 'reducers/counter';

const Store = createStore(counter);

Store.subscribe(() =>
  console.log(Store.getState())
);

export default Store;
