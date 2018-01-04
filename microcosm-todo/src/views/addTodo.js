import React from 'react'
import ActionForm from 'microcosm/addons/action-form'
import { addTodo } from '../actions'

let AddTodo = () => {
  let input

  return (
    <div>
      <ActionForm action={addTodo} onDone={() => {
        input.value = ''
      }}>
        <input name="text" ref={node => {input = node}}/>
        <button>Add Todo</button>
      </ActionForm>
    </div>
  )
}

export default AddTodo
