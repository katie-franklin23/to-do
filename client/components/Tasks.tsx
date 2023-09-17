import { Task as TaskModel } from '../../models/Tasks'
import { Task } from './Task'
interface TaskProps {
  tasks: TaskModel[]
}
export function Tasks({ tasks }: TaskProps) {
  return (
    <ul className="todo-list">
      {tasks.map((task: TaskModel, index: number) => (
        <li key={index}>
          <Task {...task} />
        </li>
      ))}
    </ul>
  )
}
