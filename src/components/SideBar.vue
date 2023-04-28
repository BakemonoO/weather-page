<template>
  <div class="side-bar"
  :class="$store.state.sideBar ? 'active__side-bar' : ''"
  >
  <div class="side-bar__button">
    <weather-button class="side-button"
    @click="changeSideBar">
    <div v-if="!$store.state.sideBar"
    class="navigation__menu_item">
      <div v-for="div in 3" :key="div" class="menu__line"></div>
      </div>
      <div class="close" v-else>
        <div class="rotate45"></div>
        <div class="rotate315"></div>
    </div>
  </weather-button>
  </div>

    <side-bar-list/>

  </div>
</template>

<script>
import SideBarList from './SideBarList.vue'
import WeatherButton from './UI/Button/WeatherButton.vue'
  export default {
  components: { WeatherButton, SideBarList },
    name: 'side-bar',

    methods: {
      changeSideBar() {
        this.$store.commit('changeSideBar')
      }
    }
  }
</script>

<style lang="scss" scoped>

.side-bar {
  width: 70px;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #DAE9F4;
  transition: all 0.5s ease;
}

.active__side-bar {
  width: 300px;
  transition: all 0.5s ease;
  padding:0 20px 20px 20px;
  align-items: flex-start;
  .side-bar__button {
    padding-left: 0;
  }
}

.side-bar__button {
  height: 80px;
  width: 70px;
  display: flex;
  padding-left: 10px;
  align-items: center;
  transition: all 0.5s ease;
  overflow-x: hidden;
}

.close-button {
  display: none;
}

.close {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.rotate45 {
  position: absolute;
  width: 26px;
  height: 1px;
  transform: rotate(45deg);
  background: #6D7784;
}

.rotate315 {
  position: absolute;
   width: 26px;
  height: 1px;
  transform: rotate(-45deg);
  background: #6D7784;
}

@keyframes inOut {
  from {
    transform: translateX(-300px);
  }
  to {
    transform: translateX(0);
  }
}

@media (width < 1400px) {
  .side-bar {
    display: none;
    background: white;
    border: none;
  }
  .active__side-bar {
    display: flex;
    height: 100%;
    position: absolute;
    z-index: 666;
    animation: inOut 0.5s ease;
  }
}

@media (width < 480px) {
  .active__side-bar {
    width: 100%;
  }
}
</style>