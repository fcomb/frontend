import React from 'react';
import { Link } from 'react-router';

import UI from 'components/ui';
import styles from 'styles/ui/navbar';
const { Navbar, Grid, Dropdown } = UI;

export default ({ users }) => (
  <header>
    <Grid.Container>
      <Navbar.Container>
        <Navbar.Brand to="/">f.containers</Navbar.Brand>

        <Navbar.Menu left>
          <Navbar.Link to="/nodes" activeClassName={styles.active}>Nodes</Navbar.Link>
          <Navbar.Link to="/apps" activeClassName={styles.active}>Applications</Navbar.Link>
        </Navbar.Menu>

        <Navbar.Menu right>
          <Dropdown placeholder={users.me.data.username}>
            <ul>
              <li><Link to="/settings/account/profile">Profile</Link></li>
              <li><Link to="/settings/account/security">Security</Link></li>
              <li><Link to="/settings/account/billing">Billing</Link></li>
              <li><Link to="/settings/account/referrals">Referrals</Link></li>
            </ul>
            <hr />
            <li>Logout</li>
          </Dropdown>
        </Navbar.Menu>
      </Navbar.Container>
    </Grid.Container>
  </header>
);
