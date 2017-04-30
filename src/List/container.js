import React from 'react';
import Element from './element';

let Container = ({ notes, onRemoveNote }) => {
  const style = {
    width: '500px',
    height: 'auto',
    margin: '0 auto',
    border: '4px solid black',
    listStyleType: 'none',
    padding: "0"
  }

  return (
    <ul style={style}>
      {notes.map((note) => <Element key={note} text={note} onRemoveNote={onRemoveNote} />)}
    </ul>
  )
}

export default Container