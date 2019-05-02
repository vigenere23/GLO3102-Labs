import axios from 'axios'
import consts from '@/constants'

export default {
  async createUser() {
    const url = `${consts.API_URL}/users`
    const data = await request(() => axios.post(url))
    if (data) consts.USER_ID = data.id
  },

  async addTodo(todoText) {
    const url = `${consts.API_URL}/${consts.USER_ID}/tasks`
    const data = { name: todoText }
    return await request(() => axios.post(url, data))
  },

  async replaceTodo(todoId, todoText) {
    const url = `${consts.API_URL}/${consts.USER_ID}/tasks/${todoId}`
    const data = { name: todoText }
    return await request(() => axios.put(url, data))
  },

  async removeTodo(todoId) {
    const url = `${consts.API_URL}/${consts.USER_ID}/tasks/${todoId}`
    return await request(() => axios.delete(url))
  }
}

async function request(axiosRequest) {
  try {
    const response = await axiosRequest()
    return response.data
  }
  catch (err) {
    // eslint-disable-next-line
    console.error(err)
    return null
  }
}