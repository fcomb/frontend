import React, { Component, PropTypes } from 'react';
// import { bindActionCreators } from 'redux';

// import * as TodoActions from 'actions/todos';

import Header from 'components/header';
import List from 'components/todos/list';

class Landing extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
  }

  render() {
    // const actions = bindActionCreators(TodoActions, dispatch);
    const { todos } = this.props;

    return (
      <div>
        <Header />
        <List todos={todos} />
      </div>
    );
  }
}

export default Landing;
