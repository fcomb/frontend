import React, { Component } from 'react';
import { Link } from 'react-router';

import UI from 'components/ui';
const { Grid, Table } = UI;

class AppContainer extends Component {
  render() {
    return (
      <Grid.Container>
        <Grid.Row>
          <Grid.Col md={6}>
            <h1>App #{this.props.params.id} [status]</h1>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col sm={2}>
            <h3>Navigation</h3>
            <ul>
              <li><Link to={`/apps/${this.props.params.id}/containers`}>containers</Link></li>
              <li><Link to={`/apps/${this.props.params.id}/settings`}>settings</Link></li>
            </ul>
          </Grid.Col>
          <Grid.Col sm={10}>
            <h3>Containers</h3>
            <Table.Container>
              <thead>
                <tr>
                  <Table.Heading>&nbsp;</Table.Heading>
                  <Table.Heading>Name</Table.Heading>
                  <Table.Heading>Actions</Table.Heading>
                </tr>
              </thead>
              <tr>
                <Table.Cell>ok</Table.Cell>
                <Table.Cell>scala-app-1</Table.Cell>
                <Table.Cell>
                  <UI.Button kind="success">start</UI.Button>
                  <UI.Button kind="danger">stop</UI.Button>
                </Table.Cell>
              </tr>
            </Table.Container>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    );
  }
}

export default AppContainer;
