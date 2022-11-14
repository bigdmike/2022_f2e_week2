import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { getLocalStorage } from '@/common/cookie';
import store from '@/store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: false },
  },
  {
    path: '/tasks',
    name: 'dashboard',
    component: () =>
      import(/* webpackChunkName: "dashboard" */ '../views/DashboardView.vue'),
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/2022_f2e_week2/',
  routes,
});

router.beforeEach((to, from, next) => {
  const member_token = getLocalStorage('member_token');
  if (to.meta.requiresAuth && member_token == '') {
    console.log('here', member_token);
    store.commit('SetLoginDialog', true);
    next({ name: 'home' });
  } else {
    console.log('NEXT here');
    next();
  }
});

export default router;
