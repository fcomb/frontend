import { handleActions } from 'redux-actions';
import * as types from 'constants/users';

const initialState = {
  list: {},
};

export const users = handleActions({
  // [types.LOAD_NODES]: (state) => ({
  //   ...state,
  //
  //   list: {
  //     isFetching: true,
  //   },
  // }),
  //
  // [types.LOAD_NODES_SUCCEEDED]: (state, { items, pagination }) => ({
  //   ...state,
  //
  //   list: {
  //     items,
  //     pagination,
  //   },
  // }),
  //
  // [types.LOAD_NODES_FAILED]: (state, { errors }) => ({
  //   ...state,
  //
  //   list: {
  //     errors,
  //   },
  // }),

  [types.LOAD_USER]: (state, { id }) => ({
    ...state,
    [id]: {
      isFetching: true,
    },
  }),

  [types.LOAD_USER_SUCCEEDED]: (state, { id, data }) => ({
    ...state,

    [id]: {
      data,
    },
  }),

  [types.LOAD_USER_FAILED]: (state, { id, errors }) => ({
    ...state,

    [id]: {
      errors,
    },
  }),
}, initialState);
