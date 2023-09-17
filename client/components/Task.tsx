import { Task as TaskModel } from '../../models/Tasks'

export function Task(task: TaskModel) {
  return (
    <div className="view">
      <input className="toggle" aria-label="Toggle-complete" type="checkbox" />

      <button>{task.task}</button>
    </div>
  )
}
