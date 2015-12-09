import React from 'react';
import UI from 'components/ui';

const { Navbar, Grid } = UI;

export default () => (
  <Navbar.Container>
    <Grid.Container>
      <Navbar.Brand to="/">fcomb</Navbar.Brand>

      <Navbar.Menu left>
        <Navbar.Link to="/containers">Containers</Navbar.Link>
      </Navbar.Menu>
      <Navbar.Menu right>
        <Navbar.Static>PSA</Navbar.Static>
      </Navbar.Menu>
    </Grid.Container>
  </Navbar.Container>
);
