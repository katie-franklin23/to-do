import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { deleteTask } from '../apis/todo'

function DeleteTodo() {
  const [taskId, setTaskId] = useState('')
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todo'] })
      setTaskId('')
    },
  })

  const handleDelete = (event) => {
    event.preventDefault()
    const taskIdAsNumber = parseInt(taskId, 10)

    if (!isNaN(taskIdAsNumber)) {
      mutation.mutate(taskIdAsNumber)
    } else {
      console.error('Invalid taskId')
    }
  }

  return (
    <form onSubmit={handleDelete}>
      <label htmlFor="deleteTaskInput" style={{ display: 'none' }}>
        Enter task ID to delete
      </label>
      <input
        id="deleteTaskInput"
        className="delete-task"
        placeholder="Enter task ID to delete"
        onChange={(event) => setTaskId(event.target.value)}
        value={taskId}
      />
      <button type="submit">Delete</button>
    </form>
  )
}

export default DeleteTodo
