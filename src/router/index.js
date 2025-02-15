import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login", // http://localhost:5173/login
    // component: () => import("../views/admin/login.vue"),
    component: () => import("@/views/admin/login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
