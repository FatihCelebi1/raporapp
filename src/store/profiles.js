const axios = require("axios");
const profiles = {
  namespaced: true,
  state: {
    profile: [],
  },

  mutations: {
    SET_PROFILE(state, profile) {
      state.profile = profile;
    },
  },

  getters: {
    getProfile(state) {
      return state.profile;
    },
  },

  actions: {
    async fetchAllData({ commit }, data) {
        console.log(data)
      try {
        const { data }= await axios.get(
          "http://localhost:8083/raporappv2/rapor-app/includes/profileDatas.php"
        );
        commit("SET_PROFILE", data.rows);
       
      } catch (error) {
        console.log(error);
      }
    },
    },
  };
export default profiles;
