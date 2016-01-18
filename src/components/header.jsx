import React from 'react';
import { Link } from 'react-router';

import UI from 'components/ui';
import styles from 'styles/ui/navbar';
const { Button, Navbar, Grid, Dropdown } = UI;

const dropdownStyles = {
  placeholder: styles.dropdownPlaceholder,
  icon: styles.dropdownIcon,
};

export default ({ state, actions }) => (
  <header>
    <Grid.Container>
      <Navbar.Container>
        <Navbar.Brand to="/">f.containers</Navbar.Brand>

        <Navbar.Menu left>
          <Navbar.Link to="/nodes" activeClassName={styles.active}>Nodes</Navbar.Link>
          <Navbar.Link to="/apps" activeClassName={styles.active}>Applications</Navbar.Link>
        </Navbar.Menu>

        <Navbar.Menu right>
          <Dropdown placeholder={state.users.me.data.username} styles={dropdownStyles}>
            <Link className={styles.dropdownElement} to="/settings/account/profile">Profile</Link>
            <Link className={styles.dropdownElement} to="/settings/account/security">Security</Link>
            <Link className={styles.dropdownElement} to="/settings/account/billing">Billing</Link>
            <Link className={styles.dropdownElement} to="/settings/account/referrals">Referrals</Link>

            <hr className={styles.dropdownDivider} />
            <Button onClick={actions.logOut}>Logout</Button>
          </Dropdown>
        </Navbar.Menu>
      </Navbar.Container>
    </Grid.Container>
  </header>
);
