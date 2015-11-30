import React from 'react';
import UI from 'components/ui';
const { Grid, Table } = UI;

export default () => (
  <Grid.Container>
    <h1>Containers</h1>

    <Grid.Row>
      <Grid.Col xs={12}>
        <Table.Container>
          <Table.Row>
            <Table.Heading width="1%">&nbsp;</Table.Heading>
            <Table.Heading>Name</Table.Heading>
            <Table.Heading width="15%">Internal IP</Table.Heading>
            <Table.Heading width="15%">External IP</Table.Heading>
            <Table.Heading width="7%">Memory</Table.Heading>
            <Table.Heading width="7%">Disk</Table.Heading>
          </Table.Row>
          <Table.Row>
            <Table.Cell>ok</Table.Cell>
            <Table.Cell>name</Table.Cell>
            <Table.Cell>127.0.0.1</Table.Cell>
            <Table.Cell>234.255.193.251</Table.Cell>
            <Table.Cell>1 GB</Table.Cell>
            <Table.Cell>20 GB</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>ok</Table.Cell>
            <Table.Cell>name</Table.Cell>
            <Table.Cell>127.0.0.1</Table.Cell>
            <Table.Cell>
              <UI.Button kind="primary" block>Order</UI.Button>
            </Table.Cell>
            <Table.Cell>1 GB</Table.Cell>
            <Table.Cell>20 GB</Table.Cell>
          </Table.Row>
        </Table.Container>
      </Grid.Col>
    </Grid.Row>
  </Grid.Container>
);
