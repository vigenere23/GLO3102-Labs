import http from 'http'
import SocketIO from 'socket.io'
import { app } from './app'
import { socketRouter } from './routers/socketRouter'

const server = http.createServer(app)
const io = SocketIO(server)

socketRouter(io)

server.listen(9090,() => {
  console.log('Server is listening at http://localhost:9090')
})

export default server;
