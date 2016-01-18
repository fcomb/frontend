import React from 'react';
import Card from './card';

import UI from 'components/ui';
const { Grid } = UI;

// const items = [{
//   publicIpAddress: `255.255.255.255`,
//   state: `initializing`,
// }, {
//   publicIpAddress: `255.255.255.255`,
//   state: `available`,
// }, {
//   publicIpAddress: `255.255.255.255`,
//   state: `unreachable`,
// }, {
//   publicIpAddress: `255.255.255.255`,
//   state: `upgrading`,
// }];
export default ({ items = [] }) => {
  return (
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
};
