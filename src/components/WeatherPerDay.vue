<template>
  <div class="weather-per-day">
    <div class="per-day__title">
      <p class="title">Погода в течении дня</p>
    </div>
    <div class="per-day__data">
      <div class="arrow start"
      :class="!scrollStart ? 'scroll__limit' : ''"
      @click="scrollToStart"
      >
        <img src="../assets/image/ScrollArrow.svg">
        </div>

        <div class="data__list" ref="dataList" @scroll="scrollIs">
          <time-weather-card v-for="data in list" :key="data.DateTime" :data="data"/>  
        </div>
      
      <div class="arrow end"
      :class="!scrollEnd ? 'scroll__limit' : ''"
      @click="scrollToEnd"
      >
        <img src="../assets/image/ScrollArrow.svg">
        </div>   
    </div>
  </div>
</template>

<script>
import TimeWeatherCard from "./UI/TimeWeatherCard.vue"
  export default {
    components: { TimeWeatherCard },
    name: 'weather-per-day',

    props: {
      list: {
        type: Array,
        required: true
      }
    },

    data() {
      return {
        maxScroll: 0,
        scrollStart: false,
        scrollEnd: true
      }
    },

    methods: {
      scrollToStart() {
        this.$refs.dataList.scrollBy({
          left: -100,
          behavior: 'smooth'
        })
      },

      scrollToEnd() {
        this.$refs.dataList.scrollBy({
          left: 100,
          behavior: 'smooth'
        })
      },

      scrollIs() {
        this.maxScroll = this.$refs.dataList.scrollWidth - this.$refs.dataList.offsetWidth

        this.$refs.dataList.scrollLeft > 0 ? this.scrollStart = true : this.scrollStart = false
        
        this.$refs.dataList.scrollLeft + 10 >= this.maxScroll ? this.scrollEnd = false : this.scrollEnd = true
        console.log(this.maxScroll)
        console.log(this.$refs.dataList.scrollLeft)
      }
    },

  }
</script>

<style lang="scss" scoped>

.weather-per-day {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 49%;
  height: 190px;
  border: 1px solid #DAE9F4;
  border-radius: 16px;
  padding: 16px 20px 20px 20px;
}

.per-day__title {
  display: flex;
  padding-bottom: 16px;
  border-bottom: 1.5px solid #DAE9F4;
  .title {
    font-size: 18px;
    font-weight: 600;
  }
}

.per-day__data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.arrow {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  }
}

.start {
  transform: rotate(180deg);
}

.data__list {
  width: 90%;
  overflow-x: hidden;
  padding: 25px 0 25px 0;
  margin-right: 25px;
  display: flex;
}

.scroll__limit {
  opacity: 0;
  pointer-events: none;
}

@media (width > 1400px) {
  .weather-per-day {
    height: 240px;
    padding: 24px 32px;
  }
  .per-day__title {
    padding-bottom: 24px;
    .title {
    font-size: 24px;
    }
  }
  .data__list {
    padding-top: 35px;
  }
}

@media (width < 750px) {
  .weather-per-day {
    width: 100%;
    padding: 15px;
  }
  .arrow {
    display: none;
  }
  .data__list {
    margin-right: 0;
    overflow-x: scroll;
    width: 100%;
  }

}

</style>