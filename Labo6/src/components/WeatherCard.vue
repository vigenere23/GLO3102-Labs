<template>
  <div class="weather-card" :class="{ big }">
    <p class="day" v-if="datetime">{{ dayOfWeek }}</p>
    <p class="time" v-if="datetime && displayTime">{{ time }}</p>
    <img :src="iconUrl">
    <p class="desc">{{ desc }}</p>
    <p class="temp" v-if="temp">{{ rounded(temp) }} °C</p>
    <p class="rain">{{ rain }}</p>
  </div>
</template>

<script>
import helper from '@/assets/js/helper'

export default {
  name: 'WeatherCard',
  props: {
    datetime: Number,
    icon: String,
    desc: String,
    temp: Number,
    rain: Number,
    big: Boolean,
    displayTime: Boolean
  },
  computed: {
    dayOfWeek () {
      return helper.getDayOfWeek(this.datetime)
    },
    time () {
      return helper.getTime(this.datetime)
    },
    iconUrl () {
      return helper.getIconUrl(this.icon)
    }
  },
  methods: {
    rounded (temp) {
      return Math.round(temp)
    }
  }
}
</script>

<style lang="scss">
.weather-card {
  text-align: center;
  font-weight: 500;

  p {
    margin: 0;
  }

  .day {
    text-transform: uppercase;
  }

  .time {
    margin-top: 4px;
  }

  img {
    width: 84px;
    margin: -8px;
  }

  &.big {

    .day {
      font-size: 24px;
    }

    img {
      width: 140px;
      margin: -12px;
    }

    .desc {
      text-transform: capitalize;
      font-size: 18px;
    }

    .temp {
      font-size: 32px;
      margin-top: 16px;
    }
  }
}
</style>
