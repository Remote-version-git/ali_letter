import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

let router = new Router({
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
          path: '/',
          component: () => import('@/components/Index.vue')
        },
        {
          path: "/rankinglist",
          component: () => import("@/components/Rankinglist.vue"),
        },
        {
          path: "/book",
          component: () => import("@/components/Book.vue")
        },
        {
<<<<<<< HEAD
          path: "/stackroom",
          component: () => import('@/components/stackroom.vue')
=======
          path: "/lightnovel",
          component: () => import("@/components/Lightnovel.vue")
>>>>>>> 386ac205874647a20efcac43674ec7bf7e7cfc21
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
    }
  ]
});
export default router