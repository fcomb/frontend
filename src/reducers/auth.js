import { handleActions } from 'redux-actions';
import * as types from 'constants/auth';

const initialState = {};

export const auth = handleActions({
  [types.SIGN_UP]: () => ({
    inProccess: true,
  }),

  [types.SIGN_UP_SUCCEEDED]: (state, { id }) => ({
    id,
  }),

  [types.SIGN_UP_FAILED]: (state, { errors }) => ({
    errors,
  }),

  [types.SIGN_IN]: () => ({
    inProccess: true,
  }),

  [types.SIGN_IN_SUCCEEDED]: (state, { token }) => ({
    token,
  }),

  [types.SIGN_IN_FAILED]: (state, { errors }) => ({
    errors,
  }),

  [types.REMOVE_TOKEN]: () => ({}),
}, initialState);
