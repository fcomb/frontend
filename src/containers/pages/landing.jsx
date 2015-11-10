import React from 'react';
import UI from 'components/ui';
const { Grid: { Container, Row, Col } } = UI;

export default class extends React.Component {
  render() {
    return (
      <Container>
        container
        <Row>
          <Col sm="6" md="4" lg="3">
            col xs12 sm6 md4 lg3
          </Col>
          <Col xs="9" sm="3" md="6" lg="9">
            col xs12 sm3 md6 lg3
          </Col>
        </Row>
      </Container>
    );
  }
}
