const users = Symbol()
let instance = null

export class UserRepository {

  constructor() {
    if (!instance) {
      this[users] = new Array()
      instance = this
    }
    
    return instance
  }

  addUser(username) {
    if (this[users].includes(username)) {
      throw new Error("The user already exists")
    } else {
      this[users].push(username)
    }
  }

  removeUser(username) {
    let indexToRemove = this[users].indexOf(username)
    if (indexToRemove >= 0) {
      this[users].splice(indexToRemove, 1);
    }
  }

}
