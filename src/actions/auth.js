import { fcomb } from 'api';
import * as types from 'constants/auth';

// sign in
const signInStarted = () => ({
  type: types.SIGN_IN,
});

const signInSucceeded = ({ token }) => ({
  type: types.SIGN_IN_SUCCEEDED,
  token,
});

const signInFailed = ({ errors }) => ({
  type: types.SIGN_IN_FAILED,
  errors,
});

// sign up
const signUpStarted = () => ({
  type: types.SIGN_UP,
});

const signUpSucceeded = ({ id }) => ({
  type: types.SIGN_UP_SUCCEEDED,
  id,
});

const signUpFailed = ({ errors }) => ({
  type: types.SIGN_UP_FAILED,
  errors,
});

function signIn(userData) {
  return (dispatch) => {
    dispatch(signInStarted());

    return fcomb.post(`sessions`, userData).then(
      ({ body }) => dispatch(signInSucceeded(body)),
      ({ body }) => dispatch(signInFailed(body))
    );
  };
}

function signUp(userData) {
  return (dispatch) => {
    dispatch(signUpStarted());

    return fcomb.post(`users/sign_up`, userData).then(
      ({ body }) => dispatch(signUpSucceeded(body)),
      ({ body }) => dispatch(signUpFailed(body))
    );
  };
}

// proof of concept
function signIn2() {
  return [{
    type: types.SIGN_IN,
  }, {
    type: types.SIGN_IN_SUCCEEDED,
    fields: [`token`],
  }, {
    type: types.SIGN_IN_FAILED,
    fields: [`id`],
  }];
}

export { signIn, signIn2, signUp };
