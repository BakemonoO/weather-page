<template>
  <div class="main">
    <div class="main-weather">
      <h1>Погода</h1>
      <div class="today-weather">
        <current-weather v-if="$store.state.currentWeather" :obj="$store.state.currentWeather"/>
        <weather-per-day v-if="$store.state.weatherPerDay" :list="$store.state.weatherPerDay"/>
      </div>
      <div class="weather-on-week">
        <weather-per-week v-if="$store.state.weatherPerFiveDays" :list="$store.state.weatherPerFiveDays"/>
      </div>
      
    </div>
  </div>
</template>

<script>
import CurrentWeather from '../components/CurrentWeather.vue'
import WeatherPerDay from '@/components/WeatherPerDay.vue'
import WeatherPerWeek from '@/components/WeatherPerWeek.vue'
  export default {
  components: { CurrentWeather, WeatherPerDay, WeatherPerWeek },
    name: 'Main',

    mounted() {
      this.$store.dispatch('getCurrentWeather')
      this.$store.dispatch('getWeatherPerDay')
      this.$store.dispatch('getWeatherPerFiveDays')
    }
   
  }
</script>

<style lang="scss" scoped>

.main {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 30px 50px 100px 50px;
  justify-content: center;
}

.main-weather {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1260px;
  width: 100%;
  h1 {
    align-self: flex-start;
    margin-bottom: 50px;
  }
}

.today-weather {
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 1260px;
}

.weather-on-week {
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
}

@media (width < 800px) {
  .main {
    padding: 20px 16px;
  }
  .main-weather {
    h1 {
      margin-bottom: 20px;
    }
  }
  .weather-on-week {
    margin-top: 30px;
  }
}

@media (width < 750px) {
  .today-weather {
    flex-direction: column;
    height: 410px;
  }
}

</style>