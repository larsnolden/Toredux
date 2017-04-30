import React, { Component } from 'react';
import './input.css'

class Input extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onAddNote = this.onAddNote.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  onInputChange(evt) {
    evt.preventDefault();
    this.setState({
      text: evt.target.value
    })
  }

  onAddNote(evt) {
    evt.preventDefault();
    if (this.state.text) this.props.onAddNote(this.state.text);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div className={'inputWrapper'}>
        <input onChange={this.onInputChange} value={this.state.text} placeholder="NOTE" /><button onClick={this.onAddNote}>add</button>
      </div>
    )
  }
}

export default Input