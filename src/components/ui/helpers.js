export const mixStyles = (styles = {}, local = {}) => {
  return {
    ...styles,
    ...local,
  };
};
