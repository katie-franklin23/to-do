import connection from './connection.js'

import { Task } from '../../models/Tasks.js'

export function getTasks(db = connection): Promise<Task[]> {
  return db<Task>('todos').select()
}

export function addTask(data: any) {
  return connection('todos').insert(data)
}

export function deleteTask(id: number) {
  return connection('todos').where({ id: id }).del()
}
