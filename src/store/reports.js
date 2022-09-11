const axios = require('axios');
const reports = {
    namespaced: true,
    state: {
        report: [],
    },
    mutations: {
        SET_REPORTS(state, payload) {
            state.report = payload
        },
    },
    getters: {
        getReport: (state) => {
            return state.report;
          },
    },

    actions: {
        getReports({ commit }) {
          axios({
            url: "http://localhost:8083/raporappv2/rapor-app/includes/reports.php",
            method: "get",
          })
            .then((res) => {
           
              commit("SET_REPORTS", res.data.rows)
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
           
        },
      },
  };
  export default reports;