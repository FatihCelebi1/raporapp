import Vue from "vue";
import Vuex from "vuex";
import reports from "./reports";
import login from "./login";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    reports,
    login,
  },
});
