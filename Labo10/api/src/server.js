import mongoose, { mongo } from 'mongoose'
import { app } from './app'

mongoose.connect('mongodb://username:password123@ds245082.mlab.com:45082/labo10', { useNewUrlParser: true })

mongoose.connection.once('open', () => console.log('Connected to database'))
mongoose.connection.on('error', (e) => console.error('Lost connection with database: ' + e))

app.listen(9090,() => console.log('Server is listening at http://localhost:9090'))

export default app;
