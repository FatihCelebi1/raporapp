const axios = require("axios");
const reports = {
  namespaced: true,
  state: {
    report: [],
    loading: false,
  },

  mutations: {
    SET_REPORTS(state, report) {
      state.report = report;
    },
    SET_LOADİNG(state, loading) {
      state.loading = loading;
    },
  },

  getters: {
    getReport(state) {
      return state.report;
    },
    getLoading(state) {
      return state.loading;
    },
  },

  actions: {
    async fetchAllReports({ commit }, data) {
      console.log("a", data);
      try {
        commit("SET_LOADİNG", true);
        const { data } = await axios.get(
          "http://localhost:8083/raporappv2/rapor-app/includes/reports.php"
        );

        commit("SET_REPORTS", data.rows);
        commit("SET_LOADİNG", false);
      } catch (error) {
        console.log(error);
      }
    },

    async sendForm({ dispatch }, form) {
      try {
        const { data } = await axios.post(
          "http://localhost:8083/raporappv2/rapor-app/includes/addreports.php",
          form,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        dispatch("fetchAllReports");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    async updateForm({ dispatch }, form) {
      try {
        const { data } = await axios.post(
          "http://localhost:8083/raporappv2/rapor-app/includes/updatereports.php",
          form,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        dispatch("fetchAllReports");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteForm({ dispatch }, itemId) {
      try {
        const { data } = await axios.post(
          "http://localhost:8083/raporappv2/rapor-app/includes/deletereports.php",
          itemId,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        dispatch("fetchAllReports");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
export default reports;
