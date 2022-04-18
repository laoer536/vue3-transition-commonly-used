import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Appear from "../views/Appear.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/appear",
    name: "Appear",
    component: Appear,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH as string),
  routes,
});

export default router;
