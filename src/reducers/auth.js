import { handleActions } from 'redux-actions';
import * as types from 'constants/auth';

const initialState = {};

const auth = handleActions({
  // [types.SIGN_UP_SUCCEEDED]: (state, action) => {
  //   const { email, id, username } = action;
  //
  //   return {
  //     ...state,
  //     email,
  //     id,
  //     username,
  //   };
  // },

  [types.SIGN_IN]: (state) => ({
    ...state,
    inProccess: true,
  }),

  [types.SIGN_IN_SUCCEEDED]: (state, { token }) => ({
    ...state,
    inProccess: false,

    token,
  }),

  [types.SIGN_IN_FAILED]: (state, { errors }) => ({
    ...state,
    inProccess: false,

    errors,
  }),
}, initialState);

export default auth;
