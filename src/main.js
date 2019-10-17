import Vue from "vue";
import App from "./App.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router";
import store from "./store";

import "./assets/css/reset.css";
import "./assets/css/baes.css"

import $ from 'jquery'
Vue.use($)
Vue.use(ElementUI);
Vue.config.productionTip = false;



// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';


Vue.component(CollapseTransition.name, CollapseTransition)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");




