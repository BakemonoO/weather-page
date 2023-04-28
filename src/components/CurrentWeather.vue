<template>
  <div v-if="obj"
  class="current-weather">
    <div class="weather__icon">
      <p class="medium">Сейчас</p>
      <img :src="require(`../assets/icon/${$store.state.hashTableIcons[obj.WeatherIcon]}.png`)" width="120" height="120">
    </div>
    <div class="weather__data">
      <p class="medium">{{ obj.WeatherText }}</p>
      <div class="line">
        <h1>{{ `${Math.round(obj.Temperature.Metric.Value)}°C` }}</h1>
      </div>
      <div class="weather__info">
        <div class="mobile">
          <p>{{ obj.WeatherText }}</p>
          <p class="now">Сейчас</p>
        </div>
        
        <div class="wind medium">
          <img src="../assets/image/Wind.svg" width="20" height="20">
          <p>{{ `${windSpeed} м/с` }}</p>
        </div>
        <div class="humidity medium">
          <img src="../assets/image/Humidity.svg" width="20" height="20">
          <p>{{ `${obj.IndoorRelativeHumidity} %` }}</p>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'current-weather',

    props: {
      obj: {
        type: Object,
        required: true
      }
    },

    computed: {
      windSpeed() { 
          return (this.obj.Wind.Speed.Metric.Value / 3.6).toFixed(2)
      }
    },

    mounted() {
     this.$store.dispatch('getCurrentWeather')
    }
  }
</script>

<style lang="scss" scoped>

.current-weather {
  display: flex;
  padding: 16px 20px 26px 20px;
  width: 49%;
  height: 190px;
  background: #75B6F2;
  border-radius: 16px;
  color: white;
  font-size: 18px;
  font-weight: 600;
}

.weather__icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 35px;
}

.weather__data {
  width: 100%;
  p {
    font-size: 16px;
    margin-top: 16px;
  }
  h1 {
    font-size: 56px;
    font-weight: 700;
    
  }
  .line {
    padding: 5px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    width: 90%;
  }
}

.weather__info {
  display: flex;
}

.mobile {
  display: none;
}

.wind, .humidity {
  width: fit-content;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-right: 20px;
  img {
    margin-right: 10px;
    margin-top: 16px;
  }
}

@media (width > 1400px) {
  .current-weather {
    height: 240px;
    padding: 24px 32px 32px 32px;
    font-size: 24px;
  }

  .weather__data {
    padding-top: 30px;
    font-size: 18px;
    h1 {
      font-size: 64px;
    }
  }
  .wind, .humidity {
    font-size: 18px;
    margin-right: 35px;
  }
}

@media (width < 800px) {
  .current-weather {
    width: 49%;
  }
  .mobile {
    display: flex;
    flex-direction: column;
  }
  .medium {
    display: none;
  }
  .weather__data {
    p {
      margin-top: 5px;
    }
    h1 {
      font-size: 48px;
    }
  }
  .now {
    font-size: 14px;
    font-weight: 400;
  }
  .weather__icon {
    height: 100%;
    justify-content: center;
  }

  @media (width < 750px) {
    .current-weather {
    width: 100%;
  }
  .weather__data {
    min-width: 120px;
    width: 30%;
    margin-top: 10px;
  }
  }
}

</style>