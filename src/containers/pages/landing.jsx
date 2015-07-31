import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';

import * as TodoActions from 'actions/todos';

import Header from 'components/header';
import List from 'components/todos/list';

class Landing extends Component {
  render() {
    return (
      <Connector select={state => ({ todos: state.todos })}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ todos, dispatch }) {
    const actions = bindActionCreators(TodoActions, dispatch);
    return (
      <div>
        <Header />
        <List todos={todos} actions={actions} addTodo={actions.addTodo} />
      </div>
    );
  }
}

export default Landing;
