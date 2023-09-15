import connection from './connection.js'

import { Task } from '../../models/Tasks.js'

export function getTasks(db = connection): Promise<Task[]> {
  return db<Task>('todos').select()
}

export function addTask(data: any) {
  console.log(data)
  return connection('todos').insert(data)
}

export function deleteTask(id: number) {
  console.log(id)
  return connection('todos').where({ id: id }).del()
}

export function updateTask(data: any, id: number) {
  console.log(data)
  return connection('todos').where({ id: id }).update(data)
}
