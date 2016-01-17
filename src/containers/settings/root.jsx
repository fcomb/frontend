import React from 'react';
import { Link } from 'react-router';

import UI from 'components/ui';
import styles from 'styles/containers';
const { Grid } = UI;

export default (props) => (
  <section>
    <Grid.Container>
      <header className={styles.header}>
        <Grid.Row>
          <Grid.Col xs={10}>
            <h1 className={styles.headerTitle}>Settings</h1>
          </Grid.Col>
        </Grid.Row>
      </header>
    </Grid.Container>

    <div className={styles.section}>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col md="4">
            <h3>Account</h3>

            <Link to="/settings/account/profile">Profile</Link>
            <Link to="/settings/account/security">Security</Link>
            <Link to="/settings/account/billing">Billing</Link>
            <Link to="/settings/account/referrals">Referrals</Link>
          </Grid.Col>
          <Grid.Col md="16">
            {props.children}
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </div>
  </section>
);
