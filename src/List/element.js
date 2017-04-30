import React from 'react';
import './element.css'

let Element = ({ text, onRemoveNote }) => {
  return <li className={'element'}><h2>{text}</h2><div onClick={() => onRemoveNote(text)}><i className="mdi mdi-delete" /></div></li >
}

export default Element;