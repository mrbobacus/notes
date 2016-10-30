<template>
<div id="app">
  <bar></bar>
  <grid></grid>
</div>
</template>

<script>
import Hello from './components/Hello'
import Bar from './components/Bar'
import Grid from './components/Grid'
import '!file?name=[name].[ext]!../manifest.json'

export default {
  name: 'app',
  components: {
    Hello,
    Bar,
    Grid
  }
}

</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
