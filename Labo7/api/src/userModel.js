import uuid from 'uuid/v4'

let tasks = Symbol()
let id = Symbol()

export class UserModel {

  constructor () {
    this[tasks] = new Map()
    this[id] = uuid()
  }

  get id () { return this[id] }
  get tasks () { return Array.from(this[tasks].values()) }

  getTask (taskId) {
    const task =  this[tasks].get(taskId)
    if (!task) throw new Error(`Task with id '${taskId}' doesn't exist.`)
    return task
  }

  saveTask (task) {
    this[tasks].set(task.id, task)
  }

  deleteTask (task) {
    this[tasks].delete(task.id)
  }

}
