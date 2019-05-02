import { UserRepository } from "./userRepository";

const userRepository = new UserRepository()

export class UserController {

  static create (req, res, next) {
    try {
      userRepository.getByUsername(req.body.username)
      res.status(400).send(`The user ${req.body.username} already exists. Try to login instead.`)
    } catch (err) {
      userRepository.create(req.body.username, req.body.password)
      next()
    }
  }

  static login (req, res) {
    res.status(200).send({
      user: req.user,
      token: req.token
    })
  }

  static profile (req, res) {
    if (req.params.id === req.user.id) {
      res.status(200).send(`This is the secret profile page for user '${req.user.username}'`)
    } else {
      res.status(403).send("You are not authorized to see someone else's profile")
    }
  }

}
