import uuid from 'uuid/v4'

let id = Symbol()
let username = Symbol()
let password = Symbol()

export class UserModel {

  constructor (newUsername, newPassword) {
    this[id] = uuid()
    this[username] = newUsername
    this[password] = newPassword
  }

  get id () { return this[id] }

  get username () { return this[username] }

  verifyPassword (comparedPassword) {
    return this[password] === comparedPassword
  }

  serialize () {
    return {
      id: this[id],
      username: this[username]
    }
  }

}
