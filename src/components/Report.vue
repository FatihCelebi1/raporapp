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
          <v-btn color="#038C3E" elevation="2" dark
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
        >
        </v-data-table>
        <v-dialog
          v-model="dialog"
          transition="dialog-bottom-transition"
          max-width="600"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="#038C3E"
              elevation="2"
              class="mt-5"
              dark
              v-bind="attrs"
              v-on="on"
              >Ödeme Ekle<v-icon class="ml-2"
                >mdi-table-row-plus-after</v-icon
              ></v-btn
            >
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="#038C3E" dark>Harcama Ekle</v-toolbar>
              <v-card-text>
                <div class="text-h2 pa-12">
                  <v-text-field
                    v-model="form.name"
                    label="Madde"
                    color="#038C3E"
                  ></v-text-field>
                  <v-text-field
                    v-model="form.cash"
                    label="Yapılan Ödeme"
                    color="#038C3E"
                    suffix="₺"
                  ></v-text-field>
                  <v-select
                    v-model="form.account"
                    :items="bankAccount"
                    color="#038C3E"
                    label="Hesap"
                    required
                  ></v-select>
                  <v-text-field
                    v-model="form.date"
                    label="Tarih"
                    color="#038C3E"
                  ></v-text-field>
                </div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn @click="sendForm(form)" color="#038C3E" outlined
                  >Ekle</v-btn
                >
                <v-btn text @click="dialog.value = false">Kapat</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </template>
    </v-container>
  </div>
</template>

<script>
// const axios = require("axios");
export default {
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      form: {
        name: "",
        cash: "",
        account: "",
        date: "",
      },
      records: [],
      headers: [
        {
          text: "Madde",
          align: "start",
          sortable: false,
          value: "madde",
        },
        { text: "Harcanan Ödeme", value: "odeme" },
        { text: "Hesap", value: "hesap" },
        { text: "Tarih", value: "tarih" },
      ],
      bankAccount: ["Nakit", "Yapıkredi", "Enpara", "Akbank"],
    };
  },
  computed: {
    getRecords() {
      return this.$store.getters["reports/getReport"];
    },
  },
  methods: {
    async sendForm() {
      await this.$store.dispatch("reports/sendForm", this.form);
      this.dialog = false;
    },
  },
  async mounted() {
    await this.$store.dispatch("reports/fetchAllReports");
  },
};
</script>
