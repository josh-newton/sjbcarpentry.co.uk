import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import UnderConstruction from '../views/UnderConstruction.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'UnderConstruction',
    component: UnderConstruction,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
