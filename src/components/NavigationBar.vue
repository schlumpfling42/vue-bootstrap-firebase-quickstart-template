<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand :to='{ name: "Home"}'>Vue Bootstrap Firbase example</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to='{ name: "Page1"}'>Page1</b-nav-item>
          <b-nav-item :to='{ name: "Page2"}'>Page2</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav v-if="user" class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{user.displayName}}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="signout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import {auth} from '../util/firebase'
export default {
  data() {
    return {
      user: null
    }
  },
  created() {
    const self = this;
    auth.onAuthStateChanged(function(user) {
      self.user = user;
    });
  },
  methods: {
    signout() {
      auth.signOut();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
