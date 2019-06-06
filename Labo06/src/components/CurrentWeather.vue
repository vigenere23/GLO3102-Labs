<template>
  <div id="current-weather">
    <div class="content">
      <h1 v-if="valid">{{ weather.city }}, {{ weather.country }}</h1>
      <h1 v-else>Location not found</h1>
      <WeatherCard
        v-if="valid"
        :big="true"
        :datetime="weather.dt"
        :icon="weather.icon"
        :desc="weather.description"
        :temp="weather.temp"
      ></WeatherCard>
    </div>
  </div>
</template>

<script>
import api from '@/assets/js/api'
import WeatherCard from '@/components/WeatherCard'

export default {
  name: 'CurrentWeather',
  components: {
    WeatherCard
  },
  props: {
    city: String,
    country: String
  },
  data () {
    return {
      weather: {},
      valid: true
    }
  },
  methods: {
    async updateData () {
      this.weather = await api.getWeather(this.city, this.country)
      if (!Object.keys(this.weather).length) {
        this.valid = false
      } else {
        this.valid = true
      }
    }
  },
  watch: {
    city: function () { this.updateData() },
    counrty: function () { this.updateData() }
  },
  mounted () { this.updateData() }
}
</script>

<style lang="scss">
#current-weather {
  width: 100%;
  color: white;
  background-color: #2196f3;
  padding: 32px 8px;

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 800px;
    margin: auto;

    h1 {
      font-size: 48px;
      font-weight: 500;
      text-align: center;
    }
  }
}
</style>
