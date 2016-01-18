import React from 'react';

export default (styles = {}) => ({ children }) => (
  children ? <span className={styles.text}>{children}</span> : <span className={styles.text}>111</span>
);
