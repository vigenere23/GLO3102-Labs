<template>
  <div class="weather-cards-list">
    <div
      class="weather-cards-list-item"
      v-for="(weather, i) in weathers"
      :key="i"
    >
      <WeatherCard
        :datetime="weather.dt"
        :icon="weather.weather[0].icon"
        :temp="weather.main.temp"
        :display-time="true"
      ></WeatherCard>
    </div>
  </div>
</template>

<script>
import WeatherCard from '@/components/WeatherCard'

export default {
  name: 'WeatherCardsList',
  components: {
    WeatherCard
  },
  props: {
    weathers: Array
  }
}
</script>

<style lang="scss">
.weather-cards-list {
  width: 100%;
  max-width: 800px;
  margin: auto;
  display: flex;
  overflow-x: auto;
  padding: 32px 0;

  .weather-cards-list-item {
    flex-shrink: 0;
    margin-right: 48px;
  }
}
</style>
