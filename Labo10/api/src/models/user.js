import mongoose from 'mongoose'
import { taskSchema } from './task'

const userSchema = new mongoose.Schema({
  tasks: [taskSchema]
})

const User = mongoose.model('User', userSchema)

export { User }
