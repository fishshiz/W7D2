import React from 'react';

export default class TodoListItem extends React.Component {
  render() {
    const { todo } = this.props;
    return (
      <li>{todo.title}</li>
    );
  }
}
