import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./main.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElIcons from "@element-plus/icons";
const web_server = createApp(App);
Object.keys(ElIcons).forEach(function (key) {
  web_server.component(ElIcons[key].name, ElIcons[key]);
});
web_server.config.devtools = true;
web_server.use(store).use(router).use(ElementPlus).mount("#app");

