<template>
  <v-container class="mt-5">
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="10">
        <h3>Raporlar</h3>
        <p class="grey--text text-darken-1 mb-2">
          Bu sayfa üzerinden günlük harcamalarınızı girebilirsiniz, Kalan miktar
          hesaplaması yapabilmeniz için Profilinizden aylık gelir bilgisini
          girmeniz gerekmektedir.
        </p>
      </v-col>
      <v-col cols="3" md="2">
        <v-btn
          color="#038C3E"
          elevation="2"
          class="mt-5"
          dark
          @click="addRecordButton()"
          :loading="loading"
          >Ödeme Ekle<v-icon class="ml-2"
            >mdi-table-row-plus-after</v-icon
          ></v-btn
        >
      </v-col>
    </v-row>
    <template>
      <v-data-table
        :loading="getLoading"
        :headers="headers"
        :items="getRecords"
        :items-per-page="-1"
        loading-text="Harcamalar Yükleniyor"
        no-data-text="Harcama Bulunmadı"
        class="elevation-0 mt-5"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
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
            @click="addRecordButton()"
            v-bind="attrs"
            v-on="on"
            :loading="loading"
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
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="form.date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="form.date"
                      label="Tarih"
                      color="#038C3E"
                      prepend-icon="mdi-calendar"
                     
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="form.date" no-title scrollable     locale="tr-tr">
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      İptal
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(form.date)">
                      
                      Onayla
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                @click="sendForm(form)"
                color="#038C3E"
                outlined
                class="customButtom"
                :loading="loading"
                >{{ buttonText }}</v-btn
              >
              <v-btn text @click="dialog.value = false">Kapat</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </template>
  </v-container>
</template>

<script>
// const axios = require("axios");
export default {
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      buttonText: "Ekle",
      loading: false,
      menu: false,
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
          value: "name",
        },
        { text: "Harcanan Ödeme", value: "cash" },
        { text: "Hesap", value: "account" },
        { text: "Tarih", value: "date" },
        { text: "Aksiyonlar", value: "actions", sortable: false },
      ],
      bankAccount: ["Nakit", "Yapıkredi", "Enpara", "Akbank"],
    };
  },
  computed: {
    getRecords() {
      return this.$store.getters["reports/getReport"];
    },
    getLoading() {
      return this.$store.getters["reports/getLoading"];
    },
    
  },
  methods: {
    async sendForm() {
      if (this.form.id) {
        (this.loading = true),
          await this.$store.dispatch("reports/updateForm", this.form);
        (this.loading = false), (this.dialog = false);
      } else {
        await this.$store.dispatch("reports/sendForm", this.form);
        this.dialog = false;
      }
    },

    editItem(item) {
      console.log(item.id);
      this.buttonText = "Ödemeyi Güncelle";
      this.form = Object.assign({}, item);
      this.dialog = true;
    },
    async deleteItem(item) {
      await this.$store.dispatch("reports/deleteForm", item);
    },
    addRecordButton() {
      this.dialog = true;
      this.form = Object.assign({}, this.getRecords);
      this.buttonText = "Ekle";
    },
  },
  async mounted() {
    await this.$store.dispatch("reports/fetchAllReports");
  },
};
</script>
<style scoped>
.customButtom {
  text-transform: unset !important;
}
</style>
