const axios = require("axios");
import router from '../router'
import Cookies from "js-cookie";

export default {
  namespaced: true,

  state: {
    user: {},
  },

  mutations: {
    SET_USER(store, user) {
      store.user = user;
    },
  },

  actions: {
    // Login olma fonksyionu
    async sendLogin({ commit }, login) {
      await axios
        .post(
          "http://localhost:8083/raporappv2/rapor-app/includes/logincontrol.php",
          login,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          commit("SET_USER", response.data.accessUser);
          Cookies.set("accessUser", JSON.stringify(response.data.accessUser));
          Cookies.set("accessToken", response.data.token);
          router.push("/");
        });
    },
  },
};
