import { UserRepository } from '../userRepository'

export class UserSocketController {

  constructor () {
    this.username = null
    this.repository = new UserRepository()
  }

  connection (socket, data) {
    this.username = data.username
    socket.broadcast.emit('connectionMessage', {
      type: 'connection',
      username: this.username,
      text: this.username + ' has joined the chat'
    })
  }

  disconnection (socket) {
    this.repository.removeUser(this.username)
    socket.broadcast.emit('connectionMessage', {
      type: 'disconnection',
      username: this.username,
      text: this.username + ' has left the chat'
    })
  }

  newMessage (socket, data) {
    socket.broadcast.emit('newMessage', {
      username: this.username,
      text: data.text
    })
  }

}
