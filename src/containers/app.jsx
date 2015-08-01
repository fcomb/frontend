import React, { Component, PropTypes } from 'react';

import Header from 'components/header';

class AppContainer extends Component {
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
