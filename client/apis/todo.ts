import request from 'superagent'
import { Task, TaskData } from '../../models/Tasks'
import { UseQueryResult, useQuery } from '@tanstack/react-query'

// To write the below //

const todosUrl = '/api/v1/todos/'
const addUrl = '/api/v1/todos/add'

// Get todos

export function getTasks(): UseQueryResult {
  return useQuery({
    queryKey: ['todo'],
    queryFn: async () => {
      const response = await request.get(todosUrl)
      return response
    },
  })
}

// Add a todo

export async function addTask(newTask: any) {
  try {
    const response = await request.post(addUrl).send(newTask)

    if (response.statusCode === 200) {
      return response
    } else {
      throw new Error(`Failed to add task. Status code: ${response.statusCode}`)
    }
  } catch (error) {
    console.error('Error adding task:', error)
    throw error
  }
}

// Delete a todo

export async function deleteTask(id: number) {
  const response = await request.delete(`${todosUrl}/${id}`)

  return response.body
}
