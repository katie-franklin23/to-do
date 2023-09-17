import express from 'express'
import { getTasks, addTask, deleteTask } from '../db/tasksfunctions'
const router = express.Router()

// ROUTES //

// GET /api/v1/todos/
router.get('/', (req, res) => {
  getTasks()
    .then((todos) => {
      res.json(todos)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

// POST /api/v1/todos/add   //Add a to-do
router.post('/add', (req, res) => {
  addTask(req.body)
    .then(() => {
      res.status(200).json({ message: 'Task has been added successfully' })
    })
    .catch((error: { message: string }) => {
      res.status(500).send(error.message)
    })
})

// DELETE /api/v1/todos:id    //Delete a to-do
router.delete('/:id', (req, res) => {
  deleteTask(parseInt(req.params.id))
    .then(() => {
      res.status(200).json({ message: 'Task has been deleted' })
    })
    .catch((error: { message: string }) => {
      res.status(500).send(error.message)
    })
})

export default router
