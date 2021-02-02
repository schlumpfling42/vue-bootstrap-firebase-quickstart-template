<template>
  <div v-if="authenticated">
    <NavigationBar />
    <!-- This is the element the route component will be displayed in -->
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from './NavigationBar';
import {auth} from '../util/firebase';

export default {
  name: 'App',
  components: {
    NavigationBar
  },
  data() {
    return {
      authenticated: false,
    }
  },
  created() {
    const self = this;
    auth.onAuthStateChanged(function(user) {
      if (!user) {
        self.authenticated = false;
        if(self.$router.currentRoute.path !== "/login") {
          self.$router.push("/login");
        }
      } else {
        self.authenticated = true;
      }
    });
  }
}
</script>

<style>
</style>
