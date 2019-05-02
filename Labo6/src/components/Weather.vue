<template>
  <div id="weather">
    <Header></Header>
    <CurrentWeather
      :city="city"
      :country="country"
    ></CurrentWeather>
    <Forecast
      :city="city"
      :country="country"
    ></Forecast>
  </div>
</template>

<script>
import Header from '@/components/Header'
import CurrentWeather from '@/components/CurrentWeather.vue'
import Forecast from '@/components/Forecast.vue'

export default {
  name: 'Weather',
  components: {
    Header,
    CurrentWeather,
    Forecast
  },
  data () {
    return {
      city: '',
      country: ''
    }
  },
  methods: {
    updateData () {
      this.city = this.$route.query.city || 'Québec'
      this.country = this.$route.query.country
    }
  },
  watch: {
    '$route': function () { this.updateData() }
  },
  mounted () { this.updateData() }
}
</script>

<style lang="scss">
#weather {
  width: 100%;
}
</style>
