<template>
  <v-container class="mt-5">
    <v-card class="pa-2 mr-2" elevation="0">
    <h3>RaporApp</h3>
    <p class="grey--text text-darken-1 mb-2">
      RaporApp ile Günlük harcamalarını kayıt edebilir ve takibini
      yapabilirsiniz.
    </p>
    </v-card>
    <v-row no-gutters class="mt-12">
      <v-col cols="12" md="6">
        <h4>Aksiyonlar</h4>
        <v-row no-gutters>
          <v-col cols="12" sm="5">
            <v-card outlined color="#038C3E" class="mt-3 mr-3">
              <v-card-title> <v-icon large> mdi-account </v-icon></v-card-title>
              <v-card-actions>
                <v-btn
                  color="#fff"
                  elevation="2"
                  class="mt-5 customButtom"
                  light
                  >Profili Görüntüle
                </v-btn>
              </v-card-actions></v-card
            >
          </v-col>
          <v-col cols="12" sm="5">
            <v-card outlined color="#038C3E" class="mt-3 mr-3">
              <v-card-title>
                <v-icon large left> mdi-table-large </v-icon></v-card-title
              >
              <v-card-actions>
                <v-btn
                  color="#fff"
                  elevation="2"
                  class="mt-5 customButtom"
                  light
                  to="/reports"
                  >Harcamalarım</v-btn
                >
              </v-card-actions></v-card
            >
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" sm="5">
            <v-card outlined color="#038C3E" class="mt-3 mr-3">
              <v-card-title>
                <v-icon large> mdi-account-multiple </v-icon></v-card-title
              >
              <v-card-actions>
                <v-btn
                  color="#fff"
                  elevation="2"
                  class="mt-5 customButtom"
                  light
                  >Kullanıcılar</v-btn
                >
              </v-card-actions></v-card
            >
          </v-col>
          <v-col cols="12" sm="5">
            <v-card outlined color="#038C3E" class="mt-3 mr-3">
              <v-card-title>
                <v-icon large left>
                  mdi-format-list-bulleted-type
                </v-icon></v-card-title
              >
              <v-card-actions>
                <v-btn
                  color="#fff"
                  elevation="2"
                  class="mt-5 customButtom"
                  light
                  >Diğer Listeler
                </v-btn>
              </v-card-actions></v-card
            >
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="6">
        <h4>Son Harcamalar</h4>
        <template v-if="!getRecords.length">
          <p>
            Her hangi bir harcamınız yok.
            <router-link to="/reports">Buraya</router-link> tıklayarak
            harcamalarını ekleyebilirsiniz
          </p>
        </template>
        <template v-else>
          <v-timeline>
            <v-timeline-item
              v-for="(record, i) in getRecords"
              :key="i"
              color="#038C3E"
              small
            >
              <template v-slot:opposite>
                <span class="font-weight-bold" v-text="record.date"></span>
              </template>
              <div>
                <h4>
                  {{ record.name }}
                </h4>
                <p>
                  {{ record.date }} tarihinde {{ record.name }} maddesine
                  {{ record.account }} ile {{ record.cash }} ₺ harcama yapıldı.
                </p>
              </div>
            </v-timeline-item>
          </v-timeline>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      records: [],
    };
  },
  computed: {
    getRecords() {
      return this.$store.getters["reports/getReport"];
    },
  },

  async mounted() {
    await this.$store.dispatch("reports/fetchAllReports");
  },
};
</script>
<style scoped>
.home-container {
  background-color: #fff !important;
}
.customButtom {
  text-transform: unset !important;
}
</style>
