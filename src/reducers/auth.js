import { handleActions } from 'redux-actions';
import { SIGN_UP_SUCCEEDED, SIGN_IN_SUCCEEDED } from 'constants/auth';

const initialState = {};

const auth = handleActions({
  [SIGN_UP_SUCCEEDED]: (state, action) => {
    const { email, id, username } = action;

    return {
      ...state,
      email,
      id,
      username,
    };
  },

  [SIGN_IN_SUCCEEDED]: (state, action) => {
    const { email, id, username, token } = action;

    return {
      ...state,
      email,
      id,
      username,
      token,
    };
  },
}, initialState);

export default auth;
