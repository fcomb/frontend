import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Landing from './pages/landing';
import Header from 'components/header';

class AppContainer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
  }

  render() {
    const { todos } = this.props;

    return (
      <main>
        <Header />

        <Landing todos={todos} />
      </main>
    );
  }
}

export default connect((state) => (state))(AppContainer);
