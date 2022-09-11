import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomePage from "../components/HomePage.vue"
import HelloWorld from "../components/HelloWorld.vue"

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "/", compenent: HomePage },
    { path: "/hello", component: HelloWorld },
  ],
});

export default router;
