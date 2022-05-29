import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./main.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./mock/index.js";
import "./mock/elementcolor.js";
import "./mock/detail.js";
import axios from "axios";
import * as echarts from "echarts";
import "lib-flexible/flexible.js";
import details from "./js/details";
Vue.directive("focus", {
  inserted: function (el) {
    el.querySelector(".el-input").children[0].focus();
  }
});
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://127.0.0.1:3000/";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(details);
new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
