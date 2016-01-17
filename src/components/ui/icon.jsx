import React from 'react';

export default () => (props) => (
  <svg {...props}>
    <use xlinkHref={require(`assets/icons/${props.icon}`)} />
  </svg>
);
