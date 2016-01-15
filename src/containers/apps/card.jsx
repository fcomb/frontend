import React from 'react';
import { Link } from 'react-router';

import styles from 'styles/card';

export default ({ data }) => (
  <Link to={`/apps/${data.id}`} className={styles.card}>
    <h6 className={styles.subtitle}>Name</h6>
    <h3 className={styles.title}>{data.name}</h3>
  </Link>
);
