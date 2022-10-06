import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Report from "../views/Report.vue";
import Profile from "../views/Profile.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/reports",
    name: "reports",
    component: Report,

  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,

  },
];

const router = new VueRouter({
  routes,
});

export default router;
