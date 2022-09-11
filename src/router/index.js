import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

import Fatih from "../components/Home.vue"
import Report from "../components/Report.vue"

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/fatih", name:"fatih", compenent: Fatih},
    { path: "/reports", name:"reports", component: Report }
  ],
});

export default router;
