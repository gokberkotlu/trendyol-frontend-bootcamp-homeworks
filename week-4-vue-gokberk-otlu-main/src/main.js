import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes';
import {store} from './store/store'

Vue.use(VueRouter);

const router = new VueRouter({
  routes : routes,
  mode : 'history'
});

new Vue({
  el: '#app',
  router : router,
  store : store,
  render: h => h(App)
})