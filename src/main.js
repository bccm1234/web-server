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
//全局函数
Vue.prototype.assessData = function (e, u) {
  let result = "";
  if (u) {
    result = e ? e + u : "Not Found";
  } else {
    result = e ? e : "Not Found";
  }
  return result;
};
//分子式、空间群字符串转换
Vue.prototype.tranStr = function (num, str) {
  // 0 means formula
  // 1 means space group symbol
  let a = "";
  let b = "";
  let newStr = "";
  if (num == 0) {
    for (let i of str) {
      if (i.match(/\d+/)) {
        newStr += "<sub>" + i + "</sub>";
      } else {
        newStr += i;
      }
    }
    return newStr;
  } else if (num == 1) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "-") {
        a = str[i] + str[i + 1];
        b =
          "<span span style='text-decoration: overline'>" +
          str[i + 1] +
          "</span>";
        i += 50;
        str = str.replace(new RegExp(a), b);
      } else if (str[i] === "_") {
        a = str[i] + str[i + 1];
        b = "<sub>" + str[i + 1] + "</sub>";
        i += 10;
        str = str.replace(new RegExp(a), b);
      }
    }
    return str;
  }
};
