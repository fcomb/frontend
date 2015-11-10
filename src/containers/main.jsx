import React from 'react';
import UI from 'components/ui';
const { Grid: { Container, Row, Col } } = UI;

export default (props) => (
  <section>
    <Container>
      <Row>
        <Col xs="12" sm="6" md="5">
          navbar
        </Col>
      </Row>
    </Container>

    {props.children}
  </section>
);
