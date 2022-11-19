import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { getLocalStorage } from '@/common/localstorage';
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
  {
    path: '/prepare_doc',
    name: 'prepare_doc',
    component: () =>
      import(
        /* webpackChunkName: "prepare_doc" */ '../views/PrepareDocView.vue'
      ),
    meta: { requiresAuth: true },
  },
  {
    path: '/sign_and_send',
    name: 'sign_and_send',
    component: () =>
      import(
        /* webpackChunkName: "sign_and_send" */ '../views/SignAndSendView.vue'
      ),
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: '/2022_f2e_week2/',
  routes,
});

router.beforeEach((to, from, next) => {
  const member_token = getLocalStorage('member_token');
  if (to.meta.requiresAuth && member_token == null) {
    store.commit('SetLoginDialog', true);
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
