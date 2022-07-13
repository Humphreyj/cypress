import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "@/stores/authStore";
import HomeView from "../allViews/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../allViews/AuthView.vue"),
    },
    {
      path: "/tasks",
      name: "taskList",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../allViews/TaskListView.vue"),
      beforeEnter: (to, from) => {
        const { isAuthenticated } = useAuth();
        if (!isAuthenticated && to.name !== "login") {
          return { name: "login" };
        }
      },
    },
    {
      path: "/posts",
      name: "posts",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../allViews/PostView.vue"),
      beforeEnter: (to, from) => {
        const { isAuthenticated } = useAuth();
        if (!isAuthenticated && to.name !== "login") {
          return { name: "login" };
        }
      },
    },
  ],
});
// router.beforeEach(async (to, from) => {
//   const { isAuthenticated } = useAuth();
//   if (!isAuthenticated && to.name !== "login") {
//     return { name: "login" };
//   }
// });
//THIS IS HOW YOU DO A GLOBAL ROUTE GUARD USING A VALUE FROM A PINIA STORE.

export default router;
