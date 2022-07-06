import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue"
import Home from "../views/Home.vue"
import Layout from "../views/Layout.vue"


const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
  },
  {
    path: "/layout",
    name: "Layout",
    component: Layout,
  },
//   {
//     path: "/about",
//     name: "about",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
