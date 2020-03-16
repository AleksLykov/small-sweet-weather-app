<template>
  <div id="app">
    <span class="small-hi">welcome to small sweet Weather App</span>
    <Weather />
  </div>
</template>

<script>
import Weather from "./components/Weather.vue";

export default {
  name: "App",
  components: {
    Weather
  },
  beforeCreate() {
    this.$store.dispatch("GET_CITY_NOW", "Краснодар");
    this.$store.dispatch("GET_CITY_FORECAST", "Краснодар");
  },
  beforeMount() {
    !this.$store.state.cityNow && this.$store.dispatch("GET_CITY_NOW", "Краснодар");
    !this.$store.state.cityForecast && this.$store.dispatch("GET_CITY_FORECAST", "Краснодар");
  }
};
</script>

<style lang="less">
@import url(all.min.css);

/* ubuntu-regular - latin_cyrillic */
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  src: url('assets/fonts/ubuntu-v14-latin_cyrillic-regular.eot'); /* IE9 Compat Modes */
  src: local('Ubuntu Regular'), local('Ubuntu-Regular'),
       url('assets/fonts/ubuntu-v14-latin_cyrillic-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('assets/fonts/ubuntu-v14-latin_cyrillic-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('assets/fonts/ubuntu-v14-latin_cyrillic-regular.woff') format('woff'), /* Modern Browsers */
       url('assets/fonts/ubuntu-v14-latin_cyrillic-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('assets/fonts/ubuntu-v14-latin_cyrillic-regular.svg#Ubuntu') format('svg'); /* Legacy iOS */
}
/* ubuntu-700 - latin_cyrillic */
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 700;
  src: url('assets/fonts/ubuntu-v14-latin_cyrillic-700.eot'); /* IE9 Compat Modes */
  src: local('Ubuntu Bold'), local('Ubuntu-Bold'),
       url('assets/fonts/ubuntu-v14-latin_cyrillic-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('assets/fonts/ubuntu-v14-latin_cyrillic-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('assets/fonts/ubuntu-v14-latin_cyrillic-700.woff') format('woff'), /* Modern Browsers */
       url('assets/fonts/ubuntu-v14-latin_cyrillic-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('assets/fonts/ubuntu-v14-latin_cyrillic-700.svg#Ubuntu') format('svg'); /* Legacy iOS */
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul[class],
ol[class] {
  padding: 0;
}
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}
html, body {
  overflow: hidden;
  @media (pointer: coarse) {
    overflow: unset;
  }
}
ul[class],
ol[class] {
  list-style: none;
}
a:not([class]) {
  text-decoration-skip-ink: auto;
}
img {
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
article > * + * {
  margin-top: 1em;
}
input,
button,
textarea,
select {
  text-decoration: none;
  border: solid 1px #ddd;
  border-radius: .3em;
  outline: none;
  font: inherit;
  background-color: #fff;
  transition: all .4s ease .1s;
  &:hover{
    background-color: rgba(252, 252, 252, 0.1);
  }
}
input,
textarea,
select {
  &:focus{
    background-color: rgba(249, 249, 249, 0.2);
  }
}
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  background: top right / cover no-repeat url(assets/wback.png) fixed;
  display: flex;
  flex-flow: column nowrap;
  flex: auto;
  justify-content: space-between;
}
#app {
  flex: 1 0 auto;
  align-self: stretch;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h2{
  padding: .5em;
}
#nav {
  padding: 15px;

  a {
    font-weight: 900;
    color: #444;

    &.router-link-exact-active {
      color: #888;
    }
  }
}
.btn{
  margin: .2em 0;
  padding: 0 .5em;
  user-select: none;
  cursor: pointer;
  height: 1.6em;
  line-height: 1.6em;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border: solid 1px transparent;
  border-radius: .5em;
  outline: none;
  background-color: transparent;
}
.small-hi {
  font-weight: 700;
  color: rgb(78, 168, 252);
}
.text-light {
  font-size: .9em;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
}
.active {
  background-color: rgba(249, 249, 249, 0.2);
}
.txt-right {
  text-align: right;
}
.txt-big {
  font-size: 2em;
}
.txt-bold {
  font-weight: 700;
}
.opacity {
  color: rgba(255, 255, 255, 0.6);
}
</style>
