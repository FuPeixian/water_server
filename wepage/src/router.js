import Vue from "vue";
import VueRouter  from 'vue-router'

Vue.use(VueRouter);

const routes = [
  { path: '/home', meta: { title:'主页'  }, component: ()=> import('./pages/Home')},
  { path: '/login', meta: { title:'授权' }, component: ()=> import('./pages/Login')},
  { path: '*', redirect: "/home"},

]
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router