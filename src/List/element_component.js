import React from 'react';
import './element_component.css'

let Element_Component = ({ id, text, onRemoveNote }) => {
  return <li className={'element'}><h2>{text}</h2><div onClick={() => onRemoveNote(id)}><i className="mdi mdi-delete" /></div></li >
}

export default Element_Component;