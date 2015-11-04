import React from 'react';
import UI from 'components/ui';

export default class extends React.Component {
  render() {
    return (
      <UI.Container>
        container
        <UI.Row>
          row
          <UI.Col xs="12" sm="6" md="4" lg="3">
            col xs12 sm6 md4 lg3
          </UI.Col>
          <UI.Col xs="9" sm="3" md="6" lg="9">
            col xs12 sm3 md6 lg3
          </UI.Col>
        </UI.Row>
      </UI.Container>
    );
  }
}
