import React from 'react';
import UI from 'components/ui';

export default (props) => (
  <section>
    <UI.Container>
      <UI.Row>
        <UI.Col xs="12" sm="6" md="5">
          navbar
        </UI.Col>
      </UI.Row>
    </UI.Container>

    {props.children}
  </section>
);
