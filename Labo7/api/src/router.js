import express from 'express'
import { UserController } from './userController'

const router = express.Router()

router.get('/', (req, res) => res.send('Welcome to Lab 4 API.'))

router.post('/users', UserController.createUser)

router.use('/:userId/*', UserController.verifyUser)
router.use('/:userId/tasks/:taskId', UserController.verifyTask)

router.get('/:userId/tasks', UserController.getAllTasks)
router.post('/:userId/tasks', UserController.addTask)
router.put('/:userId/tasks/:taskId', UserController.modifyTask)
router.delete('/:userId/tasks/:taskId', UserController.deleteTask)

export { router }
