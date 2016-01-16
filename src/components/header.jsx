import React from 'react';
import UI from 'components/ui';

const { Navbar, Grid } = UI;
import styles from 'styles/ui/navbar';

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
          <Navbar.Link to="/account">{users.me.data.username}</Navbar.Link>
        </Navbar.Menu>
      </Navbar.Container>
    </Grid.Container>
  </header>
);
