import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import { toggleTodo } from '../actions'

class VisibleTodoList extends Presenter {
  getModel() {
    return {
      todos: state => {
        switch (state.currentFilter) {
          case 'All':
            return state.todos
          case 'Active':
            return state.todos.filter(t => !t.completed)
          case 'Completed':
            return state.todos.filter(t => t.completed)
          default:
            return state.todos
        }
      }
    }
  }

  handleToggle(id) {
    this.repo.push(toggleTodo, id)
  }

  render() {
    let { todos } = this.model

    return (
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => this.handleToggle(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    )
  }
}

export default VisibleTodoList
