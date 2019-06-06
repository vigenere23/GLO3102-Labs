import { UserRepository } from "../userRepository";

const userRepository = new UserRepository()

export class UserController {

  static addUserToRoom (req, res) {
    try {
      userRepository.addUser(req.body.username)
      res.status(200).send({ username: req.username })
    } catch (error) {
      res.status(400).send(error.message)
    }
  }

}
