import uuid from 'uuid/v4'

let id = Symbol()
let name = Symbol()

export class TaskModel {

  constructor (taskName) {
    this[id] = uuid()
    this.setName(taskName)
  }

  get id () { return this[id] }
  get name () { return this[name] }
  get infos () {
    return { id: this[id], name: this[name] }
  }

  setName (newName) {
    if (!newName) {
      throw new Error("Task definition is invalid.")
    }

    if (!(newName instanceof String)) {
      newName = new String(newName)
    }

    this[name] = newName
  }

}
