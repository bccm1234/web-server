import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./main.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./mock/index.js";
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
