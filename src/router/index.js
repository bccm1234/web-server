import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/web-main.vue";
import Detail from "@/views/web-detail.vue";
import Login from "@/views/web-login.vue";

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
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
