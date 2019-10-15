import Vue from "vue";
import App from "./App.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router";
import store from "./store";
<<<<<<< HEAD

import './assets/css/index.css'

=======
import "./assets/css/reset.css";
>>>>>>> 0a0a9e52f7d8680517c823d36d93a1561f8eb489
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");




