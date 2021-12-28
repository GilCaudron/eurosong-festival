<template>
<div id="app">
  <h1>EuroSong API</h1>
  <hr>
  <br>
  <br>
  <button @click="$router.push('Game')">Game</button>
  <br>
  <br>
  <button @click="$router.push('Rank')">Rank</button>
  <router-view></router-view>
  <hr>
</div>
</template>

<script>
export default {
  data (){
    return {}
  }
  }

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
