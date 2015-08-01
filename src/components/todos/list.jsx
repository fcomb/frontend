import React, { Component, PropTypes } from 'react';
import UI from 'components/ui';

class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
  }

  render() {
    const { todos } = this.props;

    return (
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo.id}: {todo.text}</li>)}
        <UI.Button className="btn-default">test</UI.Button>
      </ul>
    );
  }
}

export default List;
