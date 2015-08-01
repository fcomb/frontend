import React, { Component } from 'react';
import { connect } from 'react-redux';

import Landing from './pages/landing';

class AppContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <Landing />
    );
  }
}

connect((state) => (state))(AppContainer);

export default AppContainer;
