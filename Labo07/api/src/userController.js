import { UserRepository } from "./userRepository";
import { TaskModel } from "./taskModel";

const userRepository = new UserRepository()

export class UserController {

  static verifyUser (req, res, next) {
    try {
      const user = userRepository.get(req.params.userId)
      req.user = user
      next()
    } catch (error) {
      res.status(404).send(error.message)
    }
  }

  static verifyTask (req, res, next) {
    try {
      const task = req.user.getTask(req.params.taskId)
      req.task = task
      next()
    } catch (error) {
      res.status(404).send(error.message)
    }
  }

  static createUser (req, res) {
    try {
      const id = userRepository.create()
      res.json({ id })
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

  static getAllTasks (req, res) {
    const tasks = new Array()
    req.user.tasks.forEach(task => tasks.push(task.infos))
    res.json({ tasks })
  }

  static addTask (req, res) {
    try {
      const task = new TaskModel(req.body.name)
      req.user.saveTask(task)
      userRepository.save(req.user)
      res.status(200).json(task.infos)
    } catch (error) {
      res.status(400).send(error.message)
    }
  }

  static modifyTask (req, res) {
    try {
      req.task.setName(req.body.name)
      req.user.saveTask(req.task)
      userRepository.save(req.user)
      res.status(200).json(req.task.infos)
    } catch (error) {
      res.status(400).send(error.message)
    }
  }

  static deleteTask (req, res) {
    try {
      req.user.deleteTask(req.task)
      res.status(204).send('')
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

}
