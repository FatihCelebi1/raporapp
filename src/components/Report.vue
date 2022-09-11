<template>
  <div>
    <v-container class="mt-5">
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="10">
          <h3>Raporlar</h3>
          <p class="grey--text text-darken-1 mb-2">
            Bu sayfa üzerinden günlük harcamalarınızı girebilirsiniz, Kalan
            miktar hesaplaması yapabilmeniz için Profilinizden aylık gelir
            bilgisini girmeniz gerekmektedir.
          </p>
        </v-col>
        <v-col cols="3" md="2">
          <v-btn color="#038C3E" elevation="2" outlined
            >Ödeme Ekle<v-icon class="ml-2"
              >mdi-table-row-plus-after</v-icon
            ></v-btn
          >
        </v-col>
      </v-row>
      <template>
        <v-data-table
          :headers="headers"
          :items="getRecords"
          :items-per-page="-1"
          hide-default-footer
          class="elevation-0 mt-5"
        ></v-data-table>
        <v-btn color="#038C3E" elevation="2" class="mt-5" outlined
          >Ödeme Ekle<v-icon class="ml-2"
            >mdi-table-row-plus-after</v-icon
          ></v-btn
        >
      </template>
    </v-container>
  </div>
</template>

<script>
// const axios = require("axios");
export default {
  data() {
    return {
      records: [],
      headers: [
        {
          text: "Sıra",
          align: "start",
          sortable: false,
          value: "madde",
        },
        { text: "Harcanan Ödeme", value: "odeme" },
        { text: "Hesap", value: "hesap" },
        { text: "Tarih", value: "tarih" },
      ],
    };
  },

  computed: {
    getRecords() {
      console.log('admın 5')
      return this.$store.getters['reports/getReport'] 
    }
  },

  // methods: {
  // async getRecords() {
  //   try {
  // const { data } = await axios.get(
  //   "http://localhost:8083/raporappv2/rapor-app/includes/reports.php"
  // );

  // this.records = data.rows;

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  // },
  async mounted() {
    // commit => mutations
    // dispatch => actions
    console.log('adım 1')
    await this.$store.dispatch('reports/fetchAllReports', 'ne istersem o');
  },
};
</script>
