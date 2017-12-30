import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({ text: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }

    const newItems = {
      text: this.state.text,
      id: Date.now()
    };

    this.setState(prevState => ({
      items: prevState.items.concat(newItems),
      text: ''
    }));
  }

  render() {
    return (
      <div>
        <h3>Todo</h3>
        <hr />
        <TodoList items={this.state.items} />
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            onChange={this.changeHandler}
            value={this.state.text}
          />
          <br />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }
}

class TodoList extends Component {
  render() {
    const items = this.props.items;
    return <ul>{items.map(item => <li key={item.id}>{item.text}</li>)}</ul>;
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
