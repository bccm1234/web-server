import Vue from "vue";
import Router from "vue-router";
import myHome from "@/components/myHome.vue";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [{ path: "/", component: myHome }]
});
