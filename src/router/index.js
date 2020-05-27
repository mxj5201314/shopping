import Vue from "vue";
import VueRouter from "vue-router";

const home = () => import ('../views/home/home.vue')
const classify = () =>import('../views/classify/classify.vue')
const cart = () => import('../views/cart/cart.vue')
const me = () => import('../views/me/me.vue')

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/classify',
    component:classify
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/me',
    component:me
  }
];

const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;
