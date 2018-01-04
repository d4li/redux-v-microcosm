let nextTodoId = 0

export function addTodo(data) {
  return {
    id: nextTodoId++,
    completed: false,
    text: data.text
  }
}

export function toggleTodo(id) {
  return id
}

export function setFilter(newFilter) {
  return newFilter
}
