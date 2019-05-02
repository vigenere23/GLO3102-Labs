import axios from 'axios'

const apiAxios = axios.create({
  baseURL: 'http://localhost:9090'
})

async function apiPost (url, data) {
  try {
    const response = await apiAxios.post(url, data)
    return response.data
  } catch (err) {
    return { error: err.response.data, status: err.response.status }
  }
}

export const api = {

  login (username) {
    return apiPost('/room', { username })
  }

}
