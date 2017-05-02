import React, {
  Component
} from 'react';
import './App.css';

//import all Container Compoenets
import Input_Container from './Input/input_container';
import List_Container from './List/list_container';

const App = () => {
  return (
    <div>
      <Input_Container />
      <List_Container />
    </div>
  )
}

export default App;