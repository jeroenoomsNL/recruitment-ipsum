import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const SITE = "Recruitment Ipsum";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: { title: `${SITE} – Lorem Ipsum, written by recruiters` },
  },
  {
    path: "/message-generator",
    name: "MessageGenerator",
    component: () => import("@/views/MessageView.vue"),
    meta: { title: `Message generator – ${SITE}` },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/AboutView.vue"),
    meta: { title: `About – ${SITE}` },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFoundView.vue"),
    meta: { title: `Page not found – ${SITE}` },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savedPosition) => savedPosition ?? { top: 0 },
});

router.afterEach((to) => {
  document.title = to.meta.title ?? SITE;
});

export default router;
