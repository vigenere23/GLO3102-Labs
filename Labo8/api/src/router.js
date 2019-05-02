import express from 'express'
import { UserAuth } from './userAuth'
import { UserController } from './userController'

const router = express.Router()

router.get('/', (req, res) => res.send('Welcome to Lab 8 API.'))

router.post('/signup',
  UserController.create,
  UserAuth.authenticate,
  UserAuth.generateToken,
  UserController.login)

router.post('/login',
  UserAuth.authenticate,
  UserAuth.generateToken,
  UserController.login)

router.get('/users/:id/profile',
  UserAuth.ensureAuth,
  UserController.profile)

export { router }
