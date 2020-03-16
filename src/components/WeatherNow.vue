<template>
  <div class="weather-now-wrapper">
    <div class="weather-now__main-display">
      <div class="weather-now__main-display-indicators">
        <img v-if="!CITY_NOW.main" src="../assets/loading.gif" alt="weather icon" style="width: 120px;">
        <img v-else :src="'http://openweathermap.org/img/wn/'+CITY_NOW.weather[0].icon+'@2x.png'" alt="weather icon" style="width: 200px;">
        <p class="text-light temperature">{{ CITY_NOW.main ? Math.round(CITY_NOW.main.temp - 273.15) : '-'}}&deg;</p>
      </div>
      <div class="weather-now__main-display-text"></div>
      <p class="text-light txt-right">ощущается как: {{ CITY_NOW.main ? Math.round(CITY_NOW.main.feels_like - 273.15) : '-'}}&deg;</p>
      <p class="text-light txt-spacing">{{ CITY_NOW.weather ? CITY_NOW.weather[0].description : 'just a moment :)'}}</p>
    </div>
    <div class="weather-now__additional-info">
      <div class="weather-now__additional-info-section">
        <p class="text-light">Ветер</p>
        <p class="desc"><b>{{ CITY_NOW.wind ? CITY_NOW.wind.speed : '-' }}</b> м/с, {{ CITY_NOW.wind ? DIRECTION[Math.floor((CITY_NOW.wind.deg +22)/44)] : '-'}}</p>
      </div>
      <div class="weather-now__additional-info-section">
        <p class="text-light">Давление</p>
        <p class="desc"><b>{{ CITY_NOW.main ? CITY_NOW.main.pressure * 0.75 : '-' }}</b> мм рт.ст</p>
      </div>
      <div class="weather-now__additional-info-section">
        <p class="text-light">Влажность</p>
        <p class="desc"><b>{{ CITY_NOW.main ? CITY_NOW.main.humidity : '-' }}</b> %</p>
      </div>
      <div class="weather-now__additional-info-section">
        <p class="text-light">Видимость</p>
        <p class="desc"><b>{{ CITY_NOW.visibility ? CITY_NOW.visibility / 1000 : "-"}}</b> км</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "WeatherNow",
  computed: {
    ...mapGetters(["CITY_NOW", "DIRECTION"])
  }
}
</script>

<style lang="less" scoped>
.weather-now-wrapper {
  flex: 1 0 auto;
  align-self: stretch;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.weather-now__main-display {
  display: flex;
  flex-flow: column nowrap;
  width: 290px;
  height: 200px;
  margin: auto;
}
.txt-spacing {
  margin-top: .5em;
  letter-spacing: 4px;
  font-size: 1em;
  color: rgba(255, 255, 255, 0.8);
}
.weather-now__main-display-indicators {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  img {
    height: 120px;
    margin: 0;
    opacity: 0.7;
    object-fit: cover;
  }
  p {
    font-size: 7em;
    font-weight: 400;
    line-height: 1em;
    letter-spacing: 2px;
  }
}
.temperature {
  letter-spacing: -10px !important;
}
.weather-now__additional-info {
  width: 100%;
  height: 70px;
  display: flex;
  flex-flow: row wrap;
  @media only screen and (max-width: 480px) { height: 140px; margin-bottom: 6em; }
  @media only screen and (max-width: 340px) { height: 140px; margin-bottom: .5em;}
}
.weather-now__additional-info-section {
  width: 25%;
  @media only screen and (max-width: 480px) { width: 50%; height: 70px;  }
  p {
    text-align: left;
    b{ font-size: 1.2em; }
  }
}
</style>