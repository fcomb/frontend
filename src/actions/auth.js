import { SIGN_UP } from 'constants/auth';

export function signUp(state) {
  return {
    type: SIGN_UP,
    ...state,
  };
}
