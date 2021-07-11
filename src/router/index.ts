import Vue from 'vue';
import type {RouteConfig} from 'vue-router';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: async (): Promise<any> => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  }
];

const router = new VueRouter({
  routes: routes
});

export default router;
