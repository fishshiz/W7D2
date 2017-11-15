import React from 'react';
import uniqueId from '../../util/timestamp.jsx';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title
          <input
            type="text"
            className="input"
            value={this.state.title}
            onChange={this.update('title')}
            />
        </label>
        <br />
        <label>Body
          <input
            type="text"
            className="input"
            value={this.state.body}
            onChange={this.update('body')}
            />
        </label>
        <br />
        <input type="submit" value="Benjamin Button"/>
      </form>
    );
  }
}

export default TodoForm;
