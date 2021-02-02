<template>
  <div>
    <NavigationBar />
    <!-- This is the element the route component will be displayed in -->
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from './NavigationBar';

export default {
  components: {
    NavigationBar
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
