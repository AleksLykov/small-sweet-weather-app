<template>
  <div class="weather-forecast-wrapper">
    <div class="oneday-wrapper" v-for="day in CITY_FORECAST.list" :key="day.id">
      <img :src="'http://openweathermap.org/img/wn/'+day.weather[0].icon+'@2x.png'" alt="weather icon">
      <p class="text-light">{{ day.weather ? day.weather[0].main : '-'}}</p>
      <p class="txt-big txt-bold">{{ day.main ? Math.round(day.main.temp - 273.15) : '-'}}&deg;</p>
      <i class="fas fa-wind fa-lg opacity"></i>
      <p class="desc"><b>{{ day.wind ? day.wind.speed : '-' }}</b> м/с</p>
      <p class="desc baseline"><img src="../assets/humidity.png" alt="vl" style="height: 24px; width: 24px;"/><b> {{ day.main ? day.main.humidity : '-' }}</b>%</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "WeatherForecast",
  computed: {
    ...mapGetters(["CITY_FORECAST"])
  }
}
</script>

<style lang="less" scoped>
.weather-forecast-wrapper {
  flex: 1 0 auto;
  align-self: stretch;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.oneday-wrapper {
  display: flex;
  flex-flow: column nowrap;
  width: 20%;
  justify-content: start;
  align-items: center;
  img {
    height: 50px;
    width: 80px;
    margin: 0;
    opacity: 0.7;
    object-fit: cover;
  }
  p img {
    display: inline-block;
    filter: contrast(0.4);
    margin-bottom: -5px;
  }
  .desc {
    margin: .2em 0;
  }
}
</style>