const ICON_URL = 'http://openweathermap.org/img/w/'

export default {

  getTime (datetime) {
    const time = new Date(datetime * 1000)
    return time.getHours() + 'h'
  },

  getDayOfWeek (datetime) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dayNumber = new Date(datetime * 1000).getDay()
    return days[dayNumber]
  },

  getIconUrl (icon) {
    return ICON_URL + icon + '.png'
  },

  convertKelvinsToCelcius (kelvins) {
    return Math.round((kelvins - 273.15) * 10.0) / 10.0
  }

}
