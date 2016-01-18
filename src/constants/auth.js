export const SIGN_UP = `auth.sign_up`;
export const SIGN_UP_SUCCEEDED = `auth.sign_up.succeeded`;
export const SIGN_UP_FAILED = `auth.sign_up.failed`;

export const SIGN_IN = `auth.sign_in`;
export const SIGN_IN_SUCCEEDED = `auth.sign_in.succeeded`;
export const SIGN_IN_FAILED = `auth.sign_in.failed`;

export const LOGOUT = `auth.logout`;
export const LOGOUT_SUCCEEDED = `auth.logout.succeeded`;
export const LOGOUT_FAILED = `auth.logout.failed`;

export const REMOVE_TOKEN = `auth.remove_token`;

export const signInForm = {
  form: `signIn`,
  fields: [`email`, `password`],
};

export const signUpForm = {
  form: `signUp`,
  fields: [`email`, `username`, `password`],
};
