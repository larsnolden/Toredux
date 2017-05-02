//simple Action
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    text
  }
}

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}