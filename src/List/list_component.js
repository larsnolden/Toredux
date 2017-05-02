import React from 'react';
import Element_Component from './element_component';

let List_Component = ({ todos, onRemoveNote }) => {
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
      {todos.map((note) => <Element_Component key={todos.indexOf(note)} id={todos.indexOf(note)} text={note} onRemoveNote={onRemoveNote} />)}
    </ul>
  )
}

export default List_Component;