import React, { Component, PropTypes } from 'react';
import cn from 'classnames';

// import 'styles/components/header';

class Header extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <h4 className={cn('title-branding', this.props.className)}>{this.props.children}</h4>
    );
  }
}

export default Header;
