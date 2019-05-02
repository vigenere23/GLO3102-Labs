import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  name: String
})

taskSchema.methods.infos = function () {
  return {
    id: this._id,
    name: this.name
  }
}

const Task = mongoose.model('Task', taskSchema)

export { taskSchema, Task }
