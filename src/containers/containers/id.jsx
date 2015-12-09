import React from 'react';
import { Link } from 'react-router';

import UI from 'components/ui';
const { Grid } = UI;

export default (props) => (
  <Grid.Container>
    <Grid.Row>
      <Grid.Col md={6}>
        <h1>Container #{props.params.id} [dot]</h1>
      </Grid.Col>
      <Grid.Col md={6}>
        <UI.Button kind="success">start</UI.Button>
        |
        <UI.Button kind="danger">stop</UI.Button>
        |
        234.255.193.251 | 1 GB | 20 GB
      </Grid.Col>
    </Grid.Row>

    <Grid.Row>
      <Grid.Col sm={2}>
        <Link to={`/containers/${props.params.id}/settings`}>settings</Link>
      </Grid.Col>
      <Grid.Col sm={10}>
        content
      </Grid.Col>
    </Grid.Row>
  </Grid.Container>
);
