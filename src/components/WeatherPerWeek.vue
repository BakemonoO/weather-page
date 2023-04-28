<template>
  <div class="weather-per-week">
    <div class="week__title">
      <p>Погода на 5 дней</p>
    </div>
    <div class="week__data">
      <day-weather-card v-for="item in list" :key="item.EpochDate" :item="item"/>
    </div>
  </div>
</template>

<script>
import DayWeatherCard from './UI/DayWeatherCard.vue'
  export default {
  components: { DayWeatherCard },
    name: 'weather-per-week',

    props: {
      list: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

.weather-per-week {
  max-width: 1260px;
  width: 100%;
  height: 230px;
  border-radius: 16px;
  background: #F4F8FD;
  padding: 20px;
}

.week__title {
  border-bottom: 2px solid #E1E7EE;
  padding-bottom: 15px;
  p {
    font-size: 18px;
    color: #212225;
    font-weight: 600;
  }
}

.week__data {
  padding-top: 20px;
  display: flex;
}

@media (width > 1400px) {
  .weather-per-week {
    height: 320px;
    padding: 24px 32px;
  }
  .week__title {
    padding-bottom: 24px;
    p {
      font-size: 24px;
    }
  }
}

@media (width < 750px) {
  .weather-per-week {
    height: 403px;
    padding: 15px;
  }
  .week__data {
    flex-direction: column;
    padding-top: 0;
  }
}

</style>