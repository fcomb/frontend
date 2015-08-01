import React, { Component, PropTypes } from 'react';

import Header from 'components/header';

class AppContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <main>
        <Header />

        {this.props.children}
      </main>
    );
  }
}

export default AppContainer;
