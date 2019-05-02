import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import uuid from 'uuid/v4'
import { UserRepository } from './userRepository';

const TOKEN_SECRET = process.env.TOKEN_SECRET || uuid()
const TOKEN_DURATION = Math.abs(Number(process.env.TOKEN_DURATION)) || 10

const jwtAuth = expressJwt({ secret: TOKEN_SECRET })
const userRepository = new UserRepository()

export class UserAuth {

  static authenticate (req, res, next) {
    
    try {
      const user = userRepository.getByUsername(req.body.username)
      if (!user.verifyPassword(req.body.password)) {
        res.status(401).send("Wrong password")
      } else {
        req.user = user.serialize()
        next()
      }
    } catch (error) {
      res.status(401).send(error.message)
    }
    
  }

  static generateToken (req, res, next) {
    req.token = jwt.sign({
      id: req.user.id,
      username: req.user.username
    }, TOKEN_SECRET, {
      expiresIn: TOKEN_DURATION 
    })
    next()
  }

  static ensureAuth (req, res, next) {
    if (req.get('authorization')) {
      return jwtAuth(req, res, next)
    } else {
      res.status(401).send('You need to authenticate yourself before accessing this page')
    }
  }

}
