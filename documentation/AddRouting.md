# Add Routing
Routing allows users to click on links, or the app switch to a different "page" without actually going to a different page or loading a new page from the server. You have to define routes and then use links or a button press to route to a different component
## Install vue router
Open a Terminal in VSCode and run `npm install vue-router`. This will install the package vue-router and add it to package.json.
Please got to the [Bootstrap Vue](https://bootstrap-vue.org/) to have a look at the documentation, we will only use a couple of elements.
## Basic setting up
The router needs to be setup when your app starts and the best place to do that is [`main.js`](./03_AddRouting/src/main.js). This is how it is looking right now: 
```
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Router from 'vue-router';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';
import Page1 from './components/Page1.vue';
import Page2 from './components/Page2.vue';

// Install BootstrapVue plugin
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Install Router plugin
Vue.use(Router);

const router = new Router({
  mode: 'history',
  // Define 3 routes, the default has the path "/"
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HelloWorld,
    },
    {
      name: 'Page1',
      path: '/Page1',
      component: Page1,
    },
    {
      name: 'Page2',
      path: '/page2',
      component: Page2,
    },
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```
The new components are here: [`Page1.vue`](./03_AddRouting/src/components/Page1.vue), [`Page2.vue`](./03_AddRouting/src/components/Page2.vue)
Now we need a spot the route element will be shown in. We want to change the main view. For that we need to change [`App.vue`](./03_AddRouting/src/App.vue).
```
<template>
  <div id="app">
    <NavigationBar />
    // This is the element the route component will be displayed in
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'

export default {
  name: 'App',
  components: {
    NavigationBar
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