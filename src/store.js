import { createStore } from 'redux';
import counter from 'reducers/counter';

const Store = createStore(counter);

export default Store;
