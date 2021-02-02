import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '../../04_AddFirebase/src/node_modules/bootstrap/dist/css/bootstrap.css';
import '../../04_AddFirebase/src/node_modules/bootstrap-vue/dist/bootstrap-vue.css';
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