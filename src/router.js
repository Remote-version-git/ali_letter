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
          path:'/',
          component:()=>import('@/components/Index.vue')
        },
        {
          path: "/rankinglist",
          component: () => import("@/components/Rankinglist.vue"),
        },
        {
          path:"/book",
          component :() => import("@/components/Book.vue")
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
    },
    {
      path: "/stackroom",
      component: () => import('@/components/stack_room.vue')
    }
  ]
});
export default router