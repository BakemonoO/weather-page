<template>
  <div class="day-weather-card">
    <div class="week__data_day">
      <p class="day">{{ stringDay }}</p>
      <p class="full-date">{{ getDate }}</p>
      </div>

      <div class="week__data_info">
        <div class="info__icon">
          <img :src="require(`../../assets/icon/${$store.state.hashTableIcons[item.Day.Icon]}.png`)" width="28" height="28">
          <p class="humidity">80%</p>
        </div>
        
      <div class="info__temp">
        <div class="temp__block">
          <p class="temp-name">мин.</p>
          <p class="temp-data">{{ `${Math.round(item.Temperature.Minimum.Value)}°` }}</p>
        </div>

        <div class="temp__block">
          <p class="temp-name">макс.</p>
          <p class="temp-data">{{ `${Math.round(item.Temperature.Maximum.Value)}°` }}</p>
        </div>
      </div>

      </div>
  </div>
</template>

<script>
  export default {
    name: 'day-weather-card',

    props: {
      item: {
        type: Object,
        required: true
      }
    },

    data() {
      return {
        month: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
      }
    },

    computed: {
      stringDay() {
        const date = new Date(this.item.EpochDate * 1000)
        const newDate = new Date()
        if (newDate.getDay() === date.getDay()) {
          return 'Сегодня'
        }
        const dayOfWeek = date.toLocaleDateString('ru-RU', {weekday: 'short'})
        return dayOfWeek.toUpperCase()
      },

      getDate() {
        const date = new Date(this.item.EpochDate * 1000)
        return date.getDate() + ' ' + this.month[date.getMonth()]
      } 
    }

  }
</script>

<style lang="scss" scoped>

.day-weather-card {
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
}

.week__data_info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 15px;
}

.week__data_day {
  align-self: flex-start;
}

.day {
  font-size: 16px;
  font-weight: 500;
  color: #4F5864;
  line-height: 19px;
  padding-left: 5px;
}

.humidity {
  color: #75B6F2;
  font-size: 12px;
  font-weight: 600;
}

.temp__block {
  display: flex;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  .temp-data {
    margin-left: 5px;
  }
  .temp-name {
    color: #6D7784;
  }
}

.full-date {
  margin: 5px;
  font-size: 14px;
  font-weight: 400;
  color: #6D7784;
  display: none;
}

@media (width > 1400px) {
  .day-weather-card {
    width: 95px;
    height: 190px;
    padding-bottom: 16px;
  }
  .week__data_info {
    height: 80%;
  }
  .day {
    font-size: 18px;
  }
  .temp-name, .temp-data {
    font-size: 18px;
  }

  .info__icon {
    img {
      width: 50px;
      height: 50px;
    }
  }
  .humidity {
    display: none;
  }

  .temp__block {
    margin-top: 12px;
  }
  .full-date {
    display: block;
  }
}

@media (width < 750px) {
  .day-weather-card {
    width: 100%;
    height: 70px;
    flex-direction: row;
    align-items: center;
    border-bottom: 2px solid #E1E7EE;
    padding: 10px 0;
  }

  .day-weather-card:last-child {
    border: none;
  }

  .week__data_day {
    align-self: center;
  }

  .week__data_info {
    height: 100%;
    padding-top: 0;
    flex-direction: row;
    align-items: center;
  }
  .info__temp {
    display: flex;
  }

  .temp__block {
    margin-left: 20px;
  }
}
</style>