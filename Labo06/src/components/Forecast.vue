<template>
  <div id="forecast" v-if="valid">
    <h1>Forecast</h1>
    <WeatherCardsList
      v-if="Object.keys(forecast).length"
      :weathers="forecast"
    ></WeatherCardsList>
  </div>
</template>

<script>
import api from '@/assets/js/api'
import WeatherCardsList from '@/components/WeatherCardsList'

export default {
  name: 'Forecast',
  components: {
    WeatherCardsList
  },
  props: {
    city: String,
    country: String
  },
  data () {
    return {
      forecast: {},
      valid: true
    }
  },
  methods: {
    async updateData () {
      this.forecast = await api.getForecast(this.city, this.country)
      if (!Object.keys(this.forecast).length) {
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
#forecast {
  width: 100%;
  padding: 32px 8px;
  color: white;
  background-color: #42a5f5;

  h1 {
    font-weight: 500;
    width: 100%;
    max-width: 800px;
    margin: 32px auto;
  }
}
</style>
