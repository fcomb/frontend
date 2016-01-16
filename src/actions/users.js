import { api } from 'config/sources';
import * as types from 'constants/users';
import * as AuthActions from './auth';

// sign up
const loadUserStarted = (id) => ({
  type: types.LOAD_USER,
  id,
});

const loadUserSucceeded = (id, data) => ({
  type: types.LOAD_USER_SUCCEEDED,
  id,
  data,
});

const loadUserFailed = (id, { errors }) => {
  return (dispatch) => {
    dispatch(AuthActions.removeToken());

    return {
      type: types.LOAD_USER_FAILED,
      id,
      errors,
    };
  };
};

export function loadUser(id) {
  return (dispatch) => {
    dispatch(loadUserStarted(id));

    return api.get(`users/${id}`)
      .then(({ body }) => dispatch(loadUserSucceeded(id, body)))
      .catch(({ body }) => dispatch(loadUserFailed(id, body))
    );
  };
}
