// import 'styles/components/button';

import React, { PropTypes } from 'react';
import cn from 'classnames';

class Button extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    size: PropTypes.string,
    kind: PropTypes.string,
  }

  render() {
    return (
      <button {...this.props} className={cn('btn', `btn-${this.props.size}`, `btn-${this.props.kind}`, this.props.className)}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
