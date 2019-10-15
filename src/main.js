import Vue from "vue";
import App from "./App.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router";
import store from "./store";
import "./assets/css/reset.css";
Vue.use(ElementUI);
Vue.config.productionTip = false;

// 引入全局css
import './assets/css/base.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");




