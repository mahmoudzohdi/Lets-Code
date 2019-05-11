import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import SingleBlog from './views/SingleBlog.vue'

Vue.use(VueRouter);
export const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/blog/:id', component: SingleBlog },
  ]
});
