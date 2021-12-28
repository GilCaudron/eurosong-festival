import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Game from './Rank.vue';
import Home from './Home.vue';
import Rank from './Rank.vue';
Vue.use(VueRouter);

const routes = [
  { path:'/Game', name: 'Game',component: Game},
  { path: '/Rank', name: 'Rank', component: Rank },
  { path: '/', name:'home',component: Home}
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

Vue.config.productionTip = false

new Vue({
  
  router: router,
  el: '#app',
  render: h => h(App),
}).$mount('#app')
