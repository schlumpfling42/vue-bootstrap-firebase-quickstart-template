import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Router from 'vue-router';
import App from './App.vue';
import Main from './components/Main.vue';
import HelloWorld from './components/HelloWorld.vue';
import Page from './components/Page.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

// Install BootstrapVue plugin
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Install Router plugin
Vue.use(Router);

const router = new Router({
  mode: 'history',
  // Define 3 routes, each route has a name and a url. 
  // Changing the URL will lead the matching Compontent bein displayed
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          name: 'Home',
          path: '/',
          component: HelloWorld,
        },
        {
          name: 'Page1',
          path: '/Page1',
          component: Page,
          props: {
            title: "Page1"
          }
        },
        {
          name: 'Page2',
          path: '/page2',
          component: Page,
          props: {
            title: "Page2"
          }
        },
      ],
    },
    {
      name: 'Login',
      path: '/login',
      component: Login,
    },
    {
      name: 'Register',
      path: '/register',
      component: Register,
    },
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')