import React from 'react';
import UI from 'components/ui';

export default (props) => (
  <section>
    <UI.Button kind="primary">UI.Button</UI.Button>
    {props.children}
  </section>
);
