import React, {
  Component
} from 'react';
import './App.css';

import Input from './Input/input';
import Container from './List/container';

const h2Style = {
  textAlign: 'center'
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(string) {
    let notes = Array.from(this.state.notes);
    notes.push(string)

    this.setState({
      notes: notes
    })

    console.log(`element added: ${JSON.stringify(notes)}`)
  }

  removeNote(key) {
    let notes = Array.from(this.state.notes);
    notes.splice(notes.indexOf(key), 1)

    this.setState({
      notes: notes
    })
  }

  render() {
    return (
      <div>
        <h2 style={h2Style}>Toredux</h2>
        <Input onAddNote={this.addNote} />
        <Container notes={this.state.notes} onRemoveNote={this.removeNote} />
      </div>
    );
  }
}

export default App;