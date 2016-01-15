import React from 'react';
import Card from './card';

import UI from 'components/ui';
const { Grid } = UI;

export default ({ items }) => (
  <Grid.Container>
    <Grid.Row>
      {items.map((node) => (
        <Grid.Col sm={10} lg={5} key={node.id}>
          <Card data={node} />
        </Grid.Col>
      ))}
    </Grid.Row>
  </Grid.Container>
);
