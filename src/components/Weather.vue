<template>
  <div class="main-wrapper">
    <transition name="weather-fade" mode="out-in">
      <span v-if="!changeCity">{{ CITY_NOW.name ? CITY_NOW.name : nameCity }}</span>
      <input v-else v-focus class="input-city" v-model="nameCity" @keyup.enter="newCity" type="text" placeholder="input city... and press enter">
    </transition>
    <div class="change">
      <button :class="{ active : changeCity }" class="btn change__city text-light" @click="changeCity = !changeCity;">Сменить город</button>
      <button class="btn change__location text-light"><i class="fas fa-location-arrow fa-xs"></i> Моё местоположение</button>
    </div>
    <div class="type_weather">
      <button :class="{ active : view === 'now'}" class="btn type_weather__today text-light" @click="view='now'">Погода сейчас</button>
      <button :class="{ active : view === 'forecast'}" class="btn type_weather__forecast text-light" @click="view='forecast'">Погода на пять дней</button>
    </div>
    <transition name="weather-fade" mode="out-in">
      <component v-bind:is="view"></component>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import WeatherNow from "@/components/WeatherNow.vue";
import WeatherForecast from "@/components/WeatherForecast.vue";

export default {
  name: "Weather",
  components: {
    'now' : WeatherNow,
    'forecast': WeatherForecast
  },
  directives: {
    focus: {
      inserted: function(el) { el.focus() }
    }
  },
  data() {
    return {
      changeCity: false,
      view: "now",
      nameCity: ''
    };
  },
  computed: {
    ...mapGetters(["CITY_NOW", "CITY_FORECAST"]),
  },
  methods: {
    async newCity() {
      this.changeCity = false;
      await this.$store.dispatch("GET_CITY_NOW", this.nameCity);
      await this.$store.dispatch("GET_CITY_FORECAST", this.nameCity);
      this.nameCity = ''
    }
  }
};
</script>

<style scoped lang="less">
.main-wrapper {
  flex: 1 0 auto;
  align-self: stretch;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  color: #fff;
  align-items: flex-start;
  padding: 1.6em 8em 2.6em;
  flex: auto;
  @media only screen and (max-width: 767px) { padding: 1.2em 5em 2em; }
  @media only screen and (max-width: 606px) { padding: 1em 2em 1.6em; }
  @media only screen and (max-width: 480px) { padding: .5em .5em .1em; }
  @media (pointer: coarse) and (max-width: 991px) { padding: .5em 2em .1em; }
  @media (pointer: coarse) and (max-width: 767px) { padding: .3em 1.5em .1em; }
  @media (pointer: coarse) and (max-width: 607px) { padding: .1em 1em .1em; }
}
span {
  margin-left: .5em;
  font-size: 2.5em;
  user-select: none;
}
.type_weather__forecast {
  margin-left: 1.4em;
}
.input-city{
  padding: 0 .5em;
  margin: .2em 0;
  color: #fff;
  width: 440px;
  font-size: 2.028em;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 0.3);
  height: 1.45em;
    @media only screen and (max-width: 480px) { width: 100%; }
}
.change__city, .type_weather__today {
  margin-right: 2em;
}
.weather-fade-enter-active, .weather-fade-leave-active {
  transition: opacity .5s ease;
}
.weather-fade-enter, .weather-fade-leave-to {
  opacity: 0;
}
</style>
