<template>
  <div class="main-wrapper">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Weather",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
