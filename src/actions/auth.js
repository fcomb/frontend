import { fcomb } from 'configs/sources';
import {
  SIGN_UP_SUCCEEDED, SIGN_UP_FAILED,
  SIGN_IN_SUCCEEDED, SIGN_IN_FAILED,
} from 'constants/auth';

// sign in
function signInSucceeded(response) {
  return {
    type: SIGN_IN_SUCCEEDED,
    ...response,
  };
}

function signInFailed(response) {
  return {
    type: SIGN_IN_FAILED,
    ...response,
  };
}

function signIn(userData) {
  return (dispatch) => {
    return fcomb.post(`sessions`, userData).then(
      response => dispatch(signInSucceeded(response)),
      response => dispatch(signInFailed(response.errors)),
    );
  };
}

// sign up
function signUpSucceeded(response) {
  return {
    type: SIGN_UP_SUCCEEDED,
    ...response,
  };
}

function signUpFailed(errors) {
  return {
    type: SIGN_UP_FAILED,
    ...errors,
  };
}

function signUp(userData) {
  return (dispatch) => {
    return fcomb.post(`users/sign_up`, userData).then(
      response => dispatch(signUpSucceeded(response)),
      response => dispatch(signUpFailed(response.errors))
    );
  };
}

export { signUp, signIn };
