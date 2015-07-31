import React, { Component } from 'react';

class List extends Component {
  render() {
    const { todos } = this.props;

    return (
      <ul>
        {todos.map(todo => <li>{todo.id}: {todo.text}</li>)}
      </ul>
    );
  }
}

export default List;
