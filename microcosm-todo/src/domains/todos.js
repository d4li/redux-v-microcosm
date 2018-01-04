import { addTodo, toggleTodo } from '../actions'

class Todos {
  getInitialState () {
    return []
  }

  addTodo (state, todo) {
    if (todo.text.length) {
      return state.concat(todo)
    } else {
      return state
    }
  }

  toggleTodo (state, id) {
    return state.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      } else {
        return todo
      }
    })
  }

  register () {
    return {
      [addTodo] : this.addTodo,
      [toggleTodo] : this.toggleTodo
    }
  }
}

export default Todos
