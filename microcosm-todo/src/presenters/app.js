import React from 'react'
import Presenter from 'microcosm/addons/presenter'

import AddTodo from '../views/addTodo'
import TodoList from '../presenters/todoList'
import Footer from '../views/footer'

class App extends Presenter {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    )
  }
}

export default App
