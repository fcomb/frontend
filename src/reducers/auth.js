import { handleActions } from 'redux-actions';
import { SIGN_UP_SUCCEEDED } from 'constants/auth';

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
}, initialState);

export default auth;
