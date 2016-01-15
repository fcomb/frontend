import { handleActions } from 'redux-actions';
import * as types from 'constants/nodes';

const initialState = {
  list: {},
};

export const nodes = handleActions({
  [types.LOAD_NODES]: (state) => ({
    ...state,

    list: {
      isFetching: true,
    },
  }),

  [types.LOAD_NODES_SUCCEEDED]: (state, { items, pagination }) => ({
    ...state,

    list: {
      items,
      pagination,
    },
  }),

  [types.LOAD_NODES_FAILED]: (state, { errors }) => ({
    ...state,

    list: {
      errors,
    },
  }),
}, initialState);
