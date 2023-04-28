import { createStore } from 'vuex'
import axios from 'axios'
import { enumIcon } from '@/helper'

export default createStore({
  state: () => ({
    apiKey: 'wdIE69jydUmKe4OHINJ27R4OBD1qphZ5',
    currentWeather: null,
    weatherPerDay: null,
    weatherPerFiveDays: null,
    hashTableIcons: null,
    sideBar: false
    }),
  
  getters: {

  },

  mutations: {
    changeCurrentWeather(state, data) {
      state.currentWeather = data
    },

    changeWeatherPerDay(state, data) {
      state.weatherPerDay = data 
    },

    changeWeatherPerFiveDays(state, data) {
      state.weatherPerFiveDays = data
    },

    getHashTableIcons(state) {
      state.hashTableIcons = enumIcon()
    },

    changeSideBar(state) {
      state.sideBar ? state.sideBar = false : state.sideBar = true
    },

    closeSideBar(state) {
      state.sideBar ? state.sideBar = false : false
    }

  },

  actions: {
    async getCurrentWeather({state, commit}) {
      const response = await axios.get('http://dataservice.accuweather.com/currentconditions/v1/293546', {
          params: {
            apikey: state.apiKey,
            details: true,
            language: 'ru',
            metric: true
          }
        })
        commit('changeCurrentWeather', response.data[0])
    },

    async getWeatherPerDay({state, commit}) {
      const response = await axios.get('http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/293546', {
          params: {
            apikey: state.apiKey,
            details: true,
            language: 'ru',
            metric: true
          }
        })
        commit('changeWeatherPerDay', response.data)
    },

    async getWeatherPerFiveDays({state, commit}) {
      const response = await axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/293546', {
          params: {
            apikey: state.apiKey,
            details: true,
            language: 'ru',
            metric: true
          }
        })
        commit('changeWeatherPerFiveDays', response.data.DailyForecasts)
    }
  }
})

// http://dataservice.accuweather.com/currentconditions/v1/293546

// http://dataservice.accuweather.com/forecasts/v1/daily/5day/293546

// http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/293546