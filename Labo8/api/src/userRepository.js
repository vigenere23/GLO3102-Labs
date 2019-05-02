import { UserModel } from './userModel';

let instance = null

export class UserRepository {

  constructor() {
    if (instance) return instance

    this.users = new Map()
    this.create('user', 'password')
    instance = this
  }

  get (userId) {
    const user = this.users.get(userId)
    if (!user) throw new Error(`User with id '${userId}' doesn't exist`)
    return user
  }

  getByUsername (username) {
    const users = Array.from(this.users.values())
    const foundUser = users.find(user => user.username === username)
    if (!foundUser) throw new Error(`User with username '${username}' doesn't exist`)
    return foundUser
  }

  create (username, password) {
    const user = new UserModel(username, password)
    this.save(user)
    return user.id
  }

  save (user) {
    this.users.set(user.id, user)
  }

}
