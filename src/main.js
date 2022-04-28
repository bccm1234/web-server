import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./main.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./mock/index.js";
import "./mock/elementcolor";
import "./mock/childpage.js";
import axios from "axios";
import * as echarts from "echarts";
Vue.directive("focus", {
  inserted: function (el) {
    el.querySelector(".el-input").children[0].focus();
  }
});
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
