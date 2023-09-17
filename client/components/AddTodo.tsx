// eslint-disable-next-line no-unused-vars

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { addTask } from '../apis/todo'

function AddTodo() {
  const [task, setTask] = useState('')
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todo'] })
      setTask('')
    },
  })

  const createTask = (event) => {
    event.preventDefault()
    mutation.mutate({ task })
  }
  return (
    <form onSubmit={createTask}>
      <label>
        Task:
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={(event) => setTask(event.target.value)}
          value={task}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo
