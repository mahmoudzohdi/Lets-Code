import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AdminRoutes from './routes/Admin/index';

Vue.use(Router);
const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
];
const routes = [...baseRoutes, ...AdminRoutes];

export default new Router({
  routes
})
