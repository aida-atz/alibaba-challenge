import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/index";
import homeRoutes from "@/router/home.route";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    children: homeRoutes,
    redirect: { name: "countries" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from) => {
  if (!store.state.country.selectedCountry && to.name == "details") {
    router.push({ name: "countries" });
  }
});
export default router;
