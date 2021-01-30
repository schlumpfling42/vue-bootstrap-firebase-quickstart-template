import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '../documentation/02_AddingBootstrap/src/node_modules/bootstrap/dist/css/bootstrap.css';
import '../documentation/02_AddingBootstrap/src/node_modules/bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')