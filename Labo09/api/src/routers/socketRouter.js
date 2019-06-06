import { UserSocketController } from '../controllers/userSocketController'

export function socketRouter(io) {

  io.on('connection', socket => {
    const userSocketController = new UserSocketController()

    socket.on('userConnected', (data) => userSocketController.connection(socket, data))
    socket.on('disconnect', () => userSocketController.disconnection(socket))

    socket.on('addMessage', (data) => userSocketController.newMessage(socket, data))
  })
  
}
