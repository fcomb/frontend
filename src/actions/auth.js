import { api } from 'config/sources';
import * as types from 'constants/auth';
import { setHTTPAuth } from 'utils/setHTTPAuth';

// sign in
const signInStarted = () => ({
  type: types.SIGN_IN,
});

const signInSucceeded = ({ token }) => {
  setHTTPAuth(token);

  return {
    type: types.SIGN_IN_SUCCEEDED,
    token,
  };
};

const signInFailed = ({ errors }) => ({
  type: types.SIGN_IN_FAILED,
  errors,
});

export function signIn(user) {
  return (dispatch) => {
    dispatch(signInStarted());

    return api.post(`sessions`, user)
      .then(({ body }) => dispatch(signInSucceeded(body)))
      .catch(({ body }) => dispatch(signInFailed(body))
    );
  };
}

// sign up
const signUpStarted = () => ({
  type: types.SIGN_UP,
});

const signUpSucceeded = (user) => {
  return (dispatch) => dispatch(signIn(user));
};

const signUpFailed = ({ errors }) => ({
  type: types.SIGN_UP_FAILED,
  errors,
});

export function signUp({ email, password }) {
  const user = {
    email,
    password,
    username: email.split(`@`)[0],
  };

  return (dispatch) => {
    dispatch(signUpStarted());

    return api.post(`users/sign_up`, user)
      .then(() => dispatch(signUpSucceeded(user)))
      .catch(({ body }) => dispatch(signUpFailed(body)));
  };
}

export function removeToken() {
  return {
    type: types.REMOVE_TOKEN,
  };
}
