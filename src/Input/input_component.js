import React, { Component } from 'react';
import './input.css'

class Input_Component extends Component {
  constructor(props) {
    super();
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleOnAddTodo = this.handleOnAddTodo.bind(this);
  }

  handleChange(evt) {
    let value = evt.target.value;
    this.setState({
      value: value
    })
  }

  handleOnAddTodo() {
    this.props.onAddTodo(this.state.value)
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div className={'inputWrapper'}>
        <input placeholder="NOTE" value={this.state.value} onChange={this.handleChange} /><button onClick={this.handleOnAddTodo}>add</button>
      </div >
    )
  }
}

export default Input_Component;