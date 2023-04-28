<template>
  <div class="navigation">

    <div class="navigation__menu">
    <div class="full-size">
      <img src="../assets/image/ShortLogo.png" height="45" width="28">
      <weather-button :width="120" class="ml32">
        <div class="cam-live">
          <img src="../assets/image/Camera.png">
          <p>LIVE</p>
        </div>
      </weather-button>

      <weather-button :width="120" class="ml32">
        <div class="weather-widget" v-if="$store.state.currentWeather">
          <img :src="require(`../assets/icon/${$store.state.hashTableIcons[$store.state.currentWeather.WeatherIcon]}.png`)" width="30" height="30">
          <p>{{`${Math.round($store.state.currentWeather.Temperature.Metric.Value)}°C`}}</p>
        </div>
      </weather-button>

      <weather-button :width="150" class="ml32" @click="changeSeason">
        <div class="season">
          <p class="summer" :class="season === 'summer' ? 'summer__active' : ''">Лето</p>
          <p class="winter" :class="season === 'winter' ? 'winter__active' : ''">Зима</p>
        </div>
      </weather-button>

      
    </div>
      <weather-button class="medium-size" @click.stop="$store.commit('changeSideBar')">
        <div class="navigation__menu_item">
          <div v-for="div in 3" :key="div" class="menu__line"></div>
        </div>
      </weather-button>

      <weather-button class="ml32">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="menu-svg">
            <path d="M10.6735 0.859375C5.26215 0.859375 0.859375 5.26215 0.859375 10.6735C0.859375 16.0852 5.26215 20.4877 10.6735 20.4877C16.0852 20.4877 20.4877 16.0852 20.4877 10.6735C20.4877 5.26215 16.0852 0.859375 10.6735 0.859375ZM10.6735 18.6759C6.26109 18.6759 2.67122 15.086 2.67122 10.6736C2.67122 6.26114 6.26109 2.67122 10.6735 2.67122C15.086 2.67122 18.6758 6.26109 18.6758 10.6735C18.6758 15.086 15.086 18.6759 10.6735 18.6759Z" fill="#6D7784"/>
            <path d="M22.881 21.6L17.6871 16.4061C17.3331 16.0521 16.76 16.0521 16.4061 16.4061C16.0521 16.7597 16.0521 17.3334 16.4061 17.6871L21.6 22.881C21.777 23.058 22.0086 23.1464 22.2405 23.1464C22.4721 23.1464 22.704 23.058 22.881 22.881C23.2349 22.5274 23.2349 21.9536 22.881 21.6Z" fill="#6D7784"/>
        </svg>
      </weather-button>
    </div>
    

    <img src="../assets/image/ShortLogo.png" class="medium-size medium-logo">

    <div class="navigation__menu">
      <weather-button class="lang-button">
        <p class="lang">RU</p>
      </weather-button>

      <weather-button class="ml32">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" class="menu-svg">
          <path d="M13 0.8125C11.7948 0.8125 10.6166 1.16989 9.6145 1.83948C8.61238 2.50907 7.83133 3.46079 7.37011 4.57427C6.90889 5.68776 6.78821 6.91301 7.02334 8.09508C7.25847 9.27715 7.83884 10.363 8.69107 11.2152C9.5433 12.0674 10.6291 12.6478 11.8112 12.8829C12.9932 13.118 14.2185 12.9974 15.332 12.5361C16.4455 12.0749 17.3972 11.2939 18.0668 10.2918C18.7364 9.28964 19.0938 8.11148 19.0938 6.90625C19.0938 5.29009 18.4517 3.74012 17.3089 2.59732C16.1661 1.45452 14.6162 0.8125 13 0.8125ZM13 11.2589C12.1391 11.2589 11.2976 11.0036 10.5818 10.5254C9.86599 10.0471 9.3081 9.3673 8.97865 8.57195C8.64921 7.7766 8.56301 6.90142 8.73096 6.05708C8.89891 5.21275 9.31346 4.43717 9.92219 3.82844C10.5309 3.21971 11.3065 2.80516 12.1508 2.63721C12.9952 2.46926 13.8704 2.55546 14.6657 2.8849C15.461 3.21434 16.1408 3.77224 16.6191 4.48803C17.0974 5.20383 17.3527 6.04537 17.3527 6.90625C17.3527 7.47785 17.2401 8.04386 17.0214 8.57195C16.8026 9.10004 16.482 9.57987 16.0778 9.98406C15.6736 10.3882 15.1938 10.7089 14.6657 10.9276C14.1376 11.1463 13.5716 11.2589 13 11.2589Z" fill="#6D7784"/>
          <path d="M17.5007 14.7422H8.49933C6.46136 14.7445 4.50753 15.5551 3.06647 16.9962C1.6254 18.4372 0.814804 20.3911 0.8125 22.429C0.8125 23.1609 1.10324 23.8628 1.62077 24.3803C2.13829 24.8979 2.84021 25.1886 3.5721 25.1886H22.4279C23.1598 25.1886 23.8617 24.8979 24.3792 24.3803C24.8968 23.8628 25.1875 23.1609 25.1875 22.429C25.1852 20.3911 24.3746 18.4372 22.9335 16.9962C21.4925 15.5551 19.5386 14.7445 17.5007 14.7422ZM22.4279 23.4475H3.5721C3.30197 23.4475 3.0429 23.3402 2.85189 23.1492C2.66088 22.9582 2.55357 22.6991 2.55357 22.429C2.55357 20.8521 3.18 19.3398 4.29504 18.2247C5.41009 17.1097 6.92242 16.4833 8.49933 16.4833H17.5007C19.0776 16.4833 20.5899 17.1097 21.705 18.2247C22.82 19.3398 23.4464 20.8521 23.4464 22.429C23.4464 22.6991 23.3391 22.9582 23.1481 23.1492C22.9571 23.3402 22.698 23.4475 22.4279 23.4475Z" fill="#6D7784"/>
        </svg>
      </weather-button>
      
     
        <weather-button class="ml32">
        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="menu-svg">
          <path d="M13.999 23.6663C13.8162 23.6663 13.6335 23.6022 13.4869 23.4739C12.3206 22.4535 11.2254 21.5221 10.1663 20.6215C4.48188 15.7876 0.726562 12.5941 0.726562 7.93206C0.726562 3.75783 3.70259 0.335938 7.77753 0.335938C9.97385 0.335938 11.8821 1.39058 13.2959 3.3859C13.5744 3.77888 13.8071 4.1714 13.999 4.53624C14.1907 4.17146 14.4236 3.77888 14.702 3.3859C16.1159 1.39058 18.0241 0.335938 20.2204 0.335938C24.2959 0.335938 27.2714 3.75851 27.2714 7.93206C27.2714 12.5941 23.5161 15.7875 17.8318 20.6214C16.7726 21.5221 15.6774 22.4534 14.5111 23.4739C14.3645 23.6022 14.1817 23.6663 13.999 23.6663ZM7.77753 1.8913C4.64452 1.8913 2.28192 4.48828 2.28192 7.93206C2.28192 11.8751 5.81933 14.8832 11.1738 19.4365C12.0811 20.2081 13.0148 21.0021 13.999 21.8569C14.9832 21.002 15.9168 20.2081 16.8242 19.4364C22.1787 14.8832 25.716 11.8751 25.716 7.93206C25.716 4.48828 23.3534 1.8913 20.2204 1.8913C18.5394 1.8913 17.1182 2.68479 15.9963 4.24979C15.1113 5.48423 14.752 6.75185 14.7486 6.76455C14.6549 7.10093 14.3483 7.33433 13.9992 7.33433C13.9987 7.33433 13.9981 7.33433 13.9977 7.33433C13.6484 7.33366 13.3424 7.10103 13.2494 6.76455C13.2459 6.7519 12.8866 5.48423 12.0016 4.24979C10.8797 2.68479 9.45846 1.8913 7.77753 1.8913Z" fill="#6D7784"/>
        </svg>
        <div class="items__length">8</div>
      </weather-button>
  
      

     
        <weather-button class="ml32">
        <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg" class="menu-svg">
          <path d="M5.0872 6.15646C4.97724 4.32133 5.48809 2.76209 6.80345 1.55962C7.68475 0.738415 8.82381 0.293988 9.9983 0.313091C11.4694 0.319591 12.7055 0.912521 13.6862 2.07238C14.6669 3.23225 15.0043 4.60949 14.9108 6.15718C15.5309 6.15718 16.1175 6.14851 16.7042 6.15718C17.3035 6.1695 17.8772 6.41599 18.3148 6.84913C18.7524 7.28227 19.0228 7.87139 19.074 8.5029C19.1191 9.10594 19.1423 9.71043 19.1683 10.3142C19.3017 13.281 19.4337 16.2476 19.5644 19.2139C19.6286 20.6656 19.701 22.1172 19.7481 23.5696C19.8014 25.1252 18.7237 25.6771 17.2499 25.6786C12.4164 25.6834 7.58338 25.6834 2.75082 25.6786C1.27906 25.6786 0.189754 25.1209 0.252586 23.5688C0.376883 20.4937 0.522355 17.42 0.657579 14.3448C0.733387 12.6318 0.803731 10.918 0.883636 9.20561C0.889173 8.84475 0.923442 8.48502 0.986078 8.13024C1.10862 7.5765 1.40231 7.0818 1.82066 6.72443C2.23901 6.36706 2.75811 6.16745 3.29581 6.15718C3.87427 6.14851 4.45478 6.15646 5.0872 6.15646ZM10.0776 24.0027C12.4856 24.0027 14.4473 24.0027 17.2499 24.0027C18.1077 24.0027 18.122 22.9611 18.1077 22.3754C18.1008 22.0778 18.1213 22.4815 18.1077 22.1839C17.9779 19.2619 17.8153 16.8896 17.6842 13.9686C17.607 12.2353 17.5347 10.502 17.4493 8.77445C17.4186 8.15191 17.0907 7.85147 16.502 7.85436C15.2559 7.86014 14.0093 7.8652 12.7622 7.86953L3.46245 7.89625C2.89902 7.89625 2.5835 8.19597 2.54867 8.78962C2.50632 9.50099 2.48515 10.2145 2.45306 10.9266C2.26638 15.1284 2.17557 17.9817 1.9889 22.1839C1.95749 22.8939 1.82066 24.0027 2.75082 24.0027H10.0776ZM13.2485 6.14201C13.3555 5.44614 13.2647 4.73235 12.9878 4.09105C12.7108 3.44976 12.2601 2.90982 11.6927 2.53965C11.1341 2.18362 10.4879 2.01187 9.83651 2.04635C9.18515 2.08082 8.55832 2.31997 8.03618 2.7332C7.01995 3.54352 6.56305 4.81315 6.75974 6.14201H13.2485Z" fill="#6D7784"/>
        </svg>
        <div class="items__length">8</div>
      </weather-button>
      

      
    </div>
    
  </div>
</template>

<script>
import WeatherButton from './UI/Button/WeatherButton.vue'
  export default {
  components: { WeatherButton },

  data() {
    return {
      season: 'summer'
    }
  },

  methods: {
    changeSeason() {
      this.season === 'summer' ? this.season = 'winter' : this.season = 'summer'
    }
  }
    
  }
</script>

<style lang="scss" scoped>

.navigation {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
}

.menu-svg:hover {
  path {
    fill: #75B6F2;
  }
}

.button-items {
  position: relative;
}

.items__length {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: #E53D18;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  top: 2px;
  right: 3px;
}

.navigation__menu {
  display: flex;
}

.medium-size {
  display: none;
}

.full-size {
  display: flex;
  align-items: center;
}

.cam-live {
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin-left: 12px;
    font-size: 21px;
    font-weight: 400;
    color: #6D7784;
  }
  &:hover {
    p {
      color: #75B6F2;
    }
  }
}

.weather-widget {
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-left: 12px;
    font-size: 21px;
    color: #6D7784;
  }
}

.lang {
  font-size: 22px;
  color: #6D7784;
}

.summer, .winter {
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #A0A7AF;
  border-radius: 12px;
}

.summer__active {
  background: #f09a19;
  color: white;
}

.winter__active {
  background: #1471eb;
  color: white;
}

.season {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
}

.season:hover {
  .winter__active, .summer__active {
    color: white;
  }
}

.relative__item {
  position: relative;
}

.ml32 {
  margin-left: 32px;
}

@media (width < 1400px) {
  .navigation {
    padding: 0 32px;
  }
  .medium-size {
  display: block;
}
  .full-size {
    display: none;
  }
  .lang-button {
    display: none;
  }
}

@media (width < 480px) {
  .navigation {
    padding: 0 10px;
  }
  .ml32 {
    margin-left: 12px;
  }
  .medium-logo {
    display: none;
  }
}

</style>