<template>
  <v-container class="mt-5">
    <div class="d-flex justify-space-between">
      <h5>Dasboard</h5>
      <h4 class="caption">{{ currentDate }}</h4>
    </div>
    <v-card class="pa-2 mt-5 rounded-lg dash-header" elevation="0">
      <div>
        <h3 class="ma-6 font-weight-bold" style="color: #038c3e">
          RaporApp'a Hoşgeldin!
        </h3>
        <p class="Subtitle-2 font-weight-medium ma-6">
          RaporApp ile Banka hesaplarını yönetebilir aylık harcamalarını takip edebilirsin.
        </p>
      </div>
    </v-card>
    <div class="mt-5">
      <v-row no-gutters>
        <v-col cols="6" md="4">
          <v-card class="pa-2 mr-2 rounded-lg" elevation="0">
            <h5 class="ma-1 font-weight-medium">Aksiyonlar</h5>
            <v-list dense>
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item   v-for="(item, i) in actionsItems"
          :key="i" :to="item.link">
                  <v-list-item-icon>
                    <v-icon class="mt-2" v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-icon >mdi-arrow-right</v-icon>
                  </v-list-item-action>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="8">
          <v-card class="pa-2 rounded-lg" elevation="0">
            <h5 class="ma-1 font-weight-medium">Son Harcamalar</h5>
            <template v-if="!getRecords.length">
          <p class="subtitle-2 ma-1">
            Her hangi bir harcamınız yok.
            <router-link to="/reports">Buraya</router-link> tıklayarak
            harcamalarını ekleyebilirsiniz
          </p>
        </template>
        <template v-else>
          <v-timeline class="ma-8">
            <v-timeline-item
              v-for="(record, i) in getRecords.slice(0, 3)"
              :key="i"
              color="#038C3E"
              small
            >
              <template v-slot:opposite>
                <span class="font-weight-medium" v-text="record.date"></span>
              </template>
              <div>
                <h4>
                  {{ record.name }}
                </h4>
                <p class="subtitle-2">
                  {{ record.date }} tarihinde {{ record.name }} maddesine
                  {{ record.account }} ile {{ record.cash }} ₺ harcama yapıldı.
                </p>
              </div>
            </v-timeline-item>
          </v-timeline>
        </template>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().toLocaleDateString().padStart(10, "0"),
      records: [],
      actionsItems: [
        { text: 'Profilimi Düzenle', icon: 'mdi-account', link: '/profile' },
        { text: 'Harcamalarım', icon: 'mdi-format-list-checks', link: '/reports' },
         { text: 'Banka Hesabı Ekle', icon: 'mdi-credit-card', link: '/reports' },
      ],
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
.dash-header {
  background-color: #e5f3eb !important;
}
.customButtom {
  text-transform: unset !important;
}
</style>
