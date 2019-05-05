<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
import AppHeader from './components/app-header'
export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style>

body{
  font-family: 'Lato', sans-serif;
  margin: 0;
}

</style>
