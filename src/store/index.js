import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cityNow: {},
    cityForecast: {},
    visitHistory: [],
    direction: ["северный","северо-восточный","восточный",
    "юго-восточный","южный","юго-западный","западный","северо-западный","северный"]
  },
  getters: {
    CITY_NOW: state => {
      return state.cityNow;
    },
    CITY_FORECAST: state => {
      return state.cityForecast;
    },
    VISIT_HISTORY: state => {
      return state.visitHistory;
    },
    DIRECTION: state => {
      return state.direction;
    }
  },
  mutations: {
    GET_CITY_NOW: (state, payload) => {
      state.cityNow = payload.data;
      state.cityNow.name = payload.payload;
    },
    GET_CITY_FORECAST: (state, payload) => {
      state.cityForecast = payload.data;
      state.cityForecast.name = payload.payload;
      state.cityForecast.list = state.cityForecast.list.map((item,id) => id%9 ===0&&item).filter(item => item)
    }
  },
  actions: {
    GET_CITY_NOW: async (context, payload) => {
      let { data } = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&APPID=c5dbd1ce32ace155e15ad61c2830cee1`, {mode: "no-cors"})
      // let { data } = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&APPID=c5dbd1ce32ace155e15ad61c2830cee1`, {headers: {"Access-Control-Allow-Origin": "*", 'Access-Control-Allow-Credentials': true, "Access-Control-Allow-Methods": "GET, POST, OPTIONS"}})
      context.commit("GET_CITY_NOW", { data, payload });
    },
    GET_CITY_FORECAST: async (context, payload) => {
      let { data } = await Axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${payload}&APPID=c5dbd1ce32ace155e15ad61c2830cee1`, {mode: "no-cors"})
      // let { data } = await Axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${payload}&APPID=c5dbd1ce32ace155e15ad61c2830cee1`, {headers: {"Access-Control-Allow-Origin": "*", 'Access-Control-Allow-Credentials': true, "Access-Control-Allow-Methods": "GET, POST, OPTIONS"}})
      context.commit("GET_CITY_FORECAST", { data, payload });
    },

  },
  modules: {}
});
