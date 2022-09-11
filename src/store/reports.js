const axios = require("axios");
const reports = {
  namespaced: true,
  state: {
    report: [],
  },

  mutations: {
    SET_REPORTS(state, report) {
      state.report = report;
    },
  },

  getters: {
    getReport(state) {
      return state.report;
    },
  },

  actions: {
    async fetchAllReports({ commit }, data) {
      console.log("data", data);
      try {
        const { data } = await axios.get(
          "http://localhost:8083/raporappv2/rapor-app/includes/reports.php"
        );
        commit("SET_REPORTS", data.rows);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
export default reports;
