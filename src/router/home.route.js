import * as homeConstants from "@/constants/home.constants";
const { routes: homeRoutes } = homeConstants;
const routes = [
  {
    name: homeRoutes.COUNTRIES_NAME,
    path: homeRoutes.COUNTRIES_PATH,
    component: () => import("@/views/Country/CountryList.vue"),
  },
  {
    name: homeRoutes.DETAILS_NAME,
    path: homeRoutes.DETAILS_PATH,
    component: () => import("@/views/Country/CountryDetails.vue"),
  },
];

export default routes;
