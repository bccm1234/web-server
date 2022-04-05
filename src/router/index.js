import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/components/web-main.vue";
import Detail from "@/components/web-detail.vue";
import Login from "@/components/web-login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main
  },
  {
    path: "/home",
    name: "home",
    component: Main
  },
  {
    path: "/detail",
    name: "detail",
    component: Detail
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = new VueRouter({
  routes
});

export default router;
