import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

export default {

  async getWeather (city, country) {
    const url = BASE_URL + 'weather'
    const query = country ? city + ',' + country : city
    const params = { q: query }
    const data = await get(url, params)
    if (!Object.keys(data).length) return data

    return Object.assign(
      data.weather[0],
      data.main,
      {
        dt: data.dt,
        city: data.name,
        country: data.sys.country
      })
  },

  async getForecast (city, country) {
    const url = BASE_URL + 'forecast'
    const query = country ? city + ',' + country : city
    const params = { q: query }
    const data = await get(url, params)
    if (!Object.keys(data).length) return data

    return data.list
  }

}

function get (url, params) {
  params['appid'] = process.env.VUE_APP_API_KEY
  params['units'] = 'metric'
  return req(() => axios.get(url, { params }))
}

async function req (axiosRequest) {
  try {
    const response = await axiosRequest()
    return response.data
  } catch (err) {
    return {}
  }
}
