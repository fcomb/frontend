import React from 'react';
import { Link } from 'react-router';

import UI from 'components/ui';
import cn from 'classnames';
import styles from 'styles/card';

const { Text } = UI;

const statesToStyles = {
  initializing: `info`,
  available: `success`,
  unreachable: `warning`,
  upgrading: `info`,
  terminating: `warning`,
  terminated: `danger`,
};

export default ({ data }) => (
  <Link to={`/nodes/${data.id}`} className={cn(styles.card, styles[statesToStyles[data.state]])}>
    <div className={styles.row}>
      <h6 className={styles.subtitle}>IP address</h6>
      <h3 className={cn(styles.title, styles.titleDarken)}>
        <Text>{data.publicIpAddress}</Text>
      </h3>
    </div>

    <div className={styles.row}>
      <h6 className={styles.subtitle}>State</h6>
      <h3 className={styles.title}>
        <Text>{data.state}</Text>
      </h3>
    </div>
  </Link>
);
