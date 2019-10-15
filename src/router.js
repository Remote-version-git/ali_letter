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
      redirect: "/home"

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
      path: "/about",
      name: "about",
<<<<<<< HEAD
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/stackroom",
      component: () => import('@/components/stack_room.vue')
=======
      component: () => import("./views/About.vue")
>>>>>>> 0a0a9e52f7d8680517c823d36d93a1561f8eb489
    }
  ]
});
export default router