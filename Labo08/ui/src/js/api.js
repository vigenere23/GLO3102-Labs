import axios from 'axios'
import Cookies from 'js-cookie'

const apiAxios = axios.create({
  baseURL: 'http://localhost:9090'
})

function getHeaders () {
  const headers = {
    'content-type': 'application/json'
  }

  if (Cookies.get('token')) {
    headers.authorization = `bearer ${Cookies.get('token')}`
  }

  return headers
}

async function apiPost (url, data) {
  try {
    const response = await apiAxios.post(url, data, { headers: getHeaders() })
    return response.data
  } catch (err) {
    return { error: err.response.data, status: err.response.status }
  }
}

async function apiGet (url) {
  try {
    const response = await apiAxios.get(url, { headers: getHeaders() })
    return response.data
  } catch (err) {
    console.log(err.response)
    return { error: err.response.data }
  }
}

export const api = {

  login (infos) {
    return apiPost('/login', infos)
  },

  signup (infos) {
    return apiPost('/signup', infos)
  },

  getProfile (userId) {
    return apiGet(`/users/${userId}/profile`)
  }

}
