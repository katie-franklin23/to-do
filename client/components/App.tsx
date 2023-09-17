import AddTodo from './AddTodo.tsx'
import { Tasks } from './Tasks.tsx'
import { getTasks } from '../apis/todo.ts'
import { deleteTask } from '../apis/todo.ts'
import DeleteTodo from './DeleteTodo.tsx'

function App() {
  const { status, data, error, isFetching } = getTasks()

  return (
    <>
      {status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <p>There was an error: {error.message}</p>
      ) : (
        <>
          <header className="header">
            <h1 tabIndex="0">todos</h1>
            <AddTodo />
          </header>
          <section className="tasks" aria-labelledby="tasks-heading">
            <h2 id="tasks-heading">Tasks</h2>
            <Tasks tasks={data.body} />
          </section>
          <section className="delete-section">
            <h2 id="delete-heading">Delete Task</h2>
            <DeleteTodo />
          </section>
          <footer className="footer">
            <p tabIndex="0">Copyright © 2023</p>
          </footer>
        </>
      )}
    </>
  )
}

export default App
