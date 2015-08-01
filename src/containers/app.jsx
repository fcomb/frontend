import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Landing from './pages/landing';

class AppContainer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
  }

  render() {
    const { todos } = this.props;

    return (
      <Landing todos={todos} />
    );
  }
}

export default connect((state) => (state))(AppContainer);
