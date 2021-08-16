import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from '../pages/home/home.vue';
import Puyuan from '../pages/puyuan/puyuan.vue';
import My from '../pages/my/my.vue';

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/puyuan',
      component: Puyuan
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
});
