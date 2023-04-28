<template>
  <div class="time-weather-card">
   <p class="card__time">{{ weatherHour }}</p>
   <img :src="require(`../../assets/icon/${$store.state.hashTableIcons[data.WeatherIcon]}.png`)" width="26" height="26">
   <p class="card__temp">{{ `${Math.round(data.Temperature.Value)}°` }}</p>
  </div>
</template>

<script>
  export default {
    name: 'time-weather-card',

    props: {
      data: {
        type: Object,
        required: false
      }
    },

    computed: {
      weatherHour() {
       return this.data.DateTime.match(/(?<=\T)\w+/).join('')
      }
    },

    // http://dataservice.accuweather.com/currentconditions/v1/293546

// http://dataservice.accuweather.com/forecasts/v1/daily/5day/293546

// http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/293546



    methods: {
      async getWeather() {
        
      }
    },

    mounted() {
    }
  }
</script>

<style lang="scss" scoped>

.time-weather-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 35px;
  height: 90px;
  margin-left: 25px;
}

.card__time {
  font-size: 14px;
  font-weight: 500;
  color: #6D7784;
}

.card__temp {
  font-size: 18px;
  font-weight: 500;
  color: #4F5864;
}

</style>