import express from 'express'
import { UserController } from '../controllers/userController'

const router = express.Router()

router.get('/', (req, res) => res.send('Welcome to Lab 8 API.'))
router.post('/room', UserController.addUserToRoom)

export { router }
