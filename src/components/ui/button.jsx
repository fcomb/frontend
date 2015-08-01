require('styles/components/button.scss');

import React, { PropTypes } from 'react';
import cn from 'classnames';

class Button extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  render() {
    return (
      <button {...this.props} className={cn('btn', this.props.className)}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
