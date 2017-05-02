let initialState = {
  todos: []
}

//Here State.App.todos will be injected late, so we just use state.todos
function App(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, { todos: addTodo(action.text, state.todos) })
    case 'REMOVE_TODO':
      return Object.assign({}, state, { todos: removeTodo(action.id, state.todos) })
    default:
      return state;
  }
}

export default App;

function addTodo(text, todos) {
  if (text) {
    let newTodos = Array.from(todos);
    newTodos.push(text);
    return newTodos;
  }
  else return todos
}

function removeTodo(id, todos) {
  let newTodos = Array.from(todos);
  newTodos.splice(id, 1);
  return newTodos;
}