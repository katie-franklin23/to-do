import { Task as TaskModel } from '../../models/Tasks'

export function Task(task: TaskModel) {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" />

      <label>{task.task}</label>
      <button className="destroy"></button>
    </div>
  )
}
