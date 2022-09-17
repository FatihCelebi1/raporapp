import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Report from "../components/Report.vue";
import LoginView from "../views/LoginPage.vue";


import Cookies from "js-cookie";

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
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEnter = (to, from, next) => {
  if (!Cookies.get("accessToken")) {
      return next({
          name: "login",
      });
  }else if(Cookies.get("accessToken")){
      return next({
          name: "home",
      });
  }
  next();
};

export default router;
