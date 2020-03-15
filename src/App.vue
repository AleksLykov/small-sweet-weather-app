<template>
  <div id="app">
    <Weather msg="Welcome to small sweet Weather App" />
  </div>
</template>

<script>
import Weather from "./components/Weather.vue";

export default {
  name: "App",
  components: {
    Weather
  }
};
</script>

<style lang="less">
body {
  background: top right / cover no-repeat url(assets/wback.png) fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
