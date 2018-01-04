import React from 'react'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <li
        key={todo.id}
        onClick={() => onTodoClick(todo.id)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}
      >
        {todo.text}
      </li>
    ))}
  </ul>
)

export default TodoList
