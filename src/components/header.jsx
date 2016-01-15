import React from 'react';
import UI from 'components/ui';

const { Navbar, Grid } = UI;
import styles from 'styles/ui/navbar';

export default ({ user }) => (
  <header>
    <Grid.Container>
      <Navbar.Container>
        <Navbar.Brand to="/">f.containers</Navbar.Brand>

        <Navbar.Menu left>
          <Navbar.Link to="/nodes" activeClassName={styles.active}>Nodes</Navbar.Link>
          <Navbar.Link to="/apps" activeClassName={styles.active}>Applications</Navbar.Link>
        </Navbar.Menu>

        <Navbar.Menu right>
          <Navbar.Link to="/me">{user.username}</Navbar.Link>
        </Navbar.Menu>
      </Navbar.Container>
    </Grid.Container>
  </header>
);
