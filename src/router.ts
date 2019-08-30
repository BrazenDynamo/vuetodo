import Vue from 'vue';
import Router from 'vue-router';
import store from './store/store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: () => import(/* webpackChunkName: "login" */ './views/TodoList.vue'),
      beforeEnter: (to, from, next) => {
        if (store.getters['user/currentUser']) {
          next();
        } else {
          next({ name: 'login' });
        }
      },
    },
  ],
});
