import React from 'react';
import { Link } from 'react-router';

import cn from 'classnames';
import styles from 'styles/card';

const statesToStyles = {
  initializing: `warning`,
  available: `success`,
  unreachable: `danger`,
  upgrading: `info`,
  terminating: `warning`,
  terminated: `danger`,
};

export default ({ data }) => (
  <Link to={`/nodes/${data.id}`} className={cn(styles.card, styles[statesToStyles[data.state]])}>
    <div className={styles.row}>
      <h6 className={styles.subtitle}>Name</h6>
      <h3 className={cn(styles.title, styles.titleDarken)}>{data.publicIpAddress}</h3>
    </div>

    <div className={styles.row}>
      <h6 className={styles.subtitle}>State</h6>
      <h3 className={styles.title}>{data.state}</h3>
    </div>
  </Link>
);
