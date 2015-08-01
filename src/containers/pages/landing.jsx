import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// import { bindActionCreators } from 'redux';
// import * as TodoActions from 'actions/todos';

import List from 'components/todos/list';

class Landing extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
  }

  render() {
    // const actions = bindActionCreators(TodoActions, dispatch);
    const { todos } = this.props;

    return (
      <List todos={todos} />
    );
  }
}

const reduxConnector = connect((state) => {
  const { todos } = state;

  return { todos };
})(Landing);

export default reduxConnector;
