import { handleActions } from 'redux-actions';
import { SIGN_UP } from 'constants/auth';

const initialState = {};

const auth = handleActions({
  [SIGN_UP]: (state, action) => {
    console.log(state);
    console.log(action);
  },
}, initialState);

export default auth;
