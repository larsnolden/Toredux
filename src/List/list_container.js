import { connect } from 'react-redux';
import { removeTodo } from '../Actions'
import List_Component from './list_component'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    todos: state.App.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveNote: (id) => {
      dispatch(removeTodo(id))
    }
  }
}

const List_Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(List_Component);

export default List_Container;