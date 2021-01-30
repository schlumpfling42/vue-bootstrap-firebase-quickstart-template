# Add Bootstrap
## Install bootstrap
Open a Terminal in VSCode and run `npm install bootstrap-vue`. This wi install the package bootstrap-vue and add it to package.json.
Please got to the [Bootstrap Vue](https://bootstrap-vue.org/) to have a look at the documentation, we will only use a couple of elements.
## Basic setting up
Bootstrap needs to be setup what your app starts and the best place to do that is `main.js`. This is how it is looking right now: 
```
import Vue from 'vue';
// Import bootstrap, icons and css files that are needed
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';
// BootstraVuw and Icons are plugins for VueJS with, so we need to tell VueJS to use them, before we create the App component.
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```
## Adding a bootstrap Navigation Bar
We are going to create components that only serve one purpose and try not to overload things. So the navigation bar will be its own  component. \
Create a new file `/src/components/NavigationBar.vue` with the following content:
```
<template>
  <div>
  ```
  Bootstrap components start with `b-` [`b-navbar'](https://bootstrap-vue.org/docs/components/navbar) is the Boostrap Navbar. Have a look at the Bootstrap-Vue documentation for details.
  ```
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>Vue Bootstrap Firbase example</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>Item1</b-nav-item>
          <b-nav-item>Item2</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
```
We have defined the component, but it's not used anywhere. We need to add it to `App.vue`. Here is how it would look like:
```
<template>
  <div id="app">
    // Add the component as HTML element.
    <NavigationBar />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// Import the new component, so it can be used.
import NavigationBar from './components/NavigationBar'

export default {
  name: 'App',
  components: {
    // Declare the imported component as component of this element.
    HelloWorld, NavigationBar
  }
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
```
If the server is not running, run `npm run serve` to try it out. Change things around in the compnent, to see the effects.
When you are done run `npm run build` and `firebase deploy` to deploy the changes.