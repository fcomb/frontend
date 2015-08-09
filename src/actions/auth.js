import { SIGN_UP_SUCCEEDED, SIGN_UP_FAILED } from 'constants/auth';
import { fcomb } from 'configs/sources';

function signUpSucceeded(userData, response) {
  return {
    type: SIGN_UP_SUCCEEDED,
    ...response,
  };
}

function signUpFailed(userData, error) {
  return {
    type: SIGN_UP_FAILED,
    ...error,
  };
}

function signUp(userData) {
  return (dispatch) => {
    return fcomb.post('users/sign_up', userData).then(
      response => dispatch(signUpSucceeded(userData, response)),
      error => dispatch(signUpFailed(userData, error))
    );
  };
}

export { signUp };
