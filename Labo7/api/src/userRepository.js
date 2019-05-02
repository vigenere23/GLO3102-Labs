import { UserModel } from './userModel';

export class UserRepository {

  constructor() {
    this.users = new Map()
  }

  get (userId) {
    const user = this.users.get(userId)
    if (!user) throw new Error(`User with id '${userId}' doesn't exist.`)
    return user
  }

  create () {
    const user = new UserModel()
    this.save(user)
    return user.id
  }

  save (user) {
    this.users.set(user.id, user)
  }

}
