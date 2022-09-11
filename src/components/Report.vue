<template>
  <div>
    <v-container class="mt-5">
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="10">
          <h3>Raporlar</h3>
          {{allReports}}
          <p class="grey--text text-darken-1 mb-2">
            Bu sayfa üzerinden günlük harcamalarınızı girebilirsiniz, Kalan
            miktar hesaplaması yapabilmeniz için Profilinizden aylık gelir
            bilgisini girmeniz gerekmektedir.
          </p>
        </v-col>
        <v-col cols="3" md="2">
          <v-btn color="#038C3E" elevation="2" outlined>Ödeme Ekle<v-icon class="ml-2">mdi-table-row-plus-after</v-icon></v-btn>
        </v-col>
      </v-row>
      <template>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="-1"
          hide-default-footer
          class="elevation-0 mt-5"
        ></v-data-table>
         <v-btn color="#038C3E" elevation="2" class="mt-5" outlined>Ödeme Ekle<v-icon class="ml-2">mdi-table-row-plus-after</v-icon></v-btn>
      </template>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Madde",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Harcanan Ödeme", value: "odeme" },
        { text: "Hesap", value: "hesap" },
        { text: "Tarih", value: "tarih" },
      ],
      desserts: [
        {
          name: "Market",
          odeme: "150₺",
          hesap: "Enpara",
          tarih: "20.09.22",
        },
        {
          name: "Benzin",
          odeme: "350₺",
          hesap: "Yapıkredi",
          tarih: "20.09.22",
        },
        {
          name: "Harcama",
          odeme: "20₺",
          hesap: "Nakit",
          tarih: "20.09.22",
        },
      ],
    };
  },
   computed: {
    allReports() {
      return this.$store.getters["reports/getReport"];
    }}
    
};
console.log('naber');
</script>
