import { User } from "../models/user";
import { Task } from "../models/task";

export class UserController {

  static async verifyUser (req, res, next) {
    const user = await User.findById(req.params.userId)
    if (user) {
      req.user = user
      next()
    } else {
      res.status(404).send(`Coulnd not find a user with id '${userId}'`)
    }
  }

  static verifyTask (req, res, next) {
    const task = req.user.tasks.id(req.params.taskId)

    if (task) {
      req.task = task
      next()
    } else {
      res.status(404).send(error.message)
    }
  }

  static async createUser (req, res) {
    try {
      const user = new User()
      await user.save()
      user ? res.json({ id: user._id }) : res.status(500).send()
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

  static getAllTasks (req, res) {
    const tasks = new Array()
    req.user.tasks.forEach(task => tasks.push(task.infos()))
    res.json({ tasks })
  }

  static async addTask (req, res) {
    try {
      const task = new Task({ name: req.body.name })
      req.user.tasks.push(task)
      await req.user.save()
      res.status(200).json(task.infos())
    } catch (error) {
      res.status(400).send(error.message)
    }
  }

  static async modifyTask (req, res) {
    try {
      req.task.set({ name: req.body.name })
      await req.user.save()
      res.status(200).json(req.task.infos)
    } catch (error) {
      res.status(400).send(error.message)
    }
  }

  static async deleteTask (req, res) {
    try {
      req.task.remove()
      await req.user.save()
      res.status(204).send('')
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

}
