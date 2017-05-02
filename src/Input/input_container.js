import { connect } from 'react-redux';
import { addTodo } from '../Actions'
import Input_Component from './input_component'

const mapDispatchToProps = dispatch => {
  //dispatch the actions and wrap them in functions as props
  return {
    onAddTodo: (text) => {
      dispatch(addTodo(text))
    }
  }
}

let Input_Container = connect(
  null,
  mapDispatchToProps
)(Input_Component);

export default Input_Container;