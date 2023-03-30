import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ModalsView from "../views/ModalsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/modals",
      name: "modals",
      component: ModalsView,
    },
    {
      path: "/posts",
      name: "posts",
      component: () => import("../views/PostsView.vue"),
    },
    {
      path: "/postDetail/:id",
      name: "postDetail",
      component: () => import("../views/PostDetailView.vue"),
    },
  ],
});

export default router;
