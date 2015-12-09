import React from 'react';
import Header from 'components/header';

export default (props) => (
  <section>
    <Header />

    {props.children}
  </section>
);
