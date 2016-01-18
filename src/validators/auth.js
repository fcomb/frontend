export default (values) => {
  const errors = {};

  if (!values.username) errors.username = `It's your hostname`;
  if (!values.email) errors.email = `Required`;
  if (!values.password) errors.password = `Required`;

  return errors;
};
