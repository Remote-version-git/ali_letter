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
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: '/',
          redirect: '/index'
        },
        {
          path: "/index",
          component: () => import('@/components/Index.vue')
        },
        {
          path: "/rankinglist",
          component: () => import("@/components/Rankinglist.vue")
        },
        {
          path: "/book/:id",
          component: () => import("@/components/Book.vue"),
          // 开启路由传参
          props: true
        },
        {
          path: "/stackroom",
          component: () => import('@/components/stackroom2.vue')
        },
        {
          path: "/lightnovel",
          component: () => import("@/components/Lightnovel.vue")
        },
        {
          path: "/male",
          component: () => import("@/components/Boyschannel.vue")
        },
        {
          path: '/author',
          component: () => import("@/components/author.vue")

        },
        {

          path: "/female",
          component: () => import("@/components/Femalefrequency.vue")
        },
        {

          path: "/search",
          component: () => import("@/components/Search.vue")
        },
      ]
    },
    {
      path: '/honor',
      component: () => import('@/components/honor.vue'),
      children: [
        {
          path: '/user',
          component: () => import('@/components/user.vue')
        },
        {
          path: '/novel',
          component: () => import('@/components/novel.vue')

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
export default router; 