import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

let router= new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "/rankinglist",
          component: () => import("@/components/Rankinglist.vue")
        }
      ]
    },
    {
      path: "/Login",
      component: () => import("@/components/login.vue")
    },
    {
      path: "/register",
      component: () => import("@/components/register.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    }
  ]
});
export default router