<template>
  <v-container class="mt-5">
    <h5>Profil</h5>
    <v-row no-gutters class="mt-5">
      <v-col cols="6" md="4">
        <v-card class="pa-2 mr-2 rounded-lg" elevation="0">
          <center>
            <div class="mr-5 ml-5">
              <v-btn
                @click="editProfile()"
                fab
                dark
                small
                absolute
                top
                right
                color="#038C3E"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-avatar size="80">
                <v-img
                  class="rounded-circle mt-5"
                  height="100"
                  width="100"
                  src="https://gurmewoo.com/wp-content/uploads/2022/10/Adsiz-tasarim-56.png"
                ></v-img>
              </v-avatar>
              <template v-for="(data, i) in getProfilesData">
                <h3 :key="i" class="mt-2 title">{{ data.name }}</h3>
                <p :key="i" class="mt-2 mb-1 caption">
                  Firma : {{ data.company }}
                </p>
                <p :key="i" class="mt-1 caption">{{ data.address }}</p>
              </template>
              <v-btn class="customButtom mb-5" outlined>Profili Düzenle</v-btn>
            </div>
          </center>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="8">
        <v-card class="pa-2 mr-2 rounded-lg" elevation="0">
          <h5 class="ma-1 font-weight-medium">Son Harcamalar</h5>
          <v-list dense>
            <v-btn fab dark small absolute top right color="#038C3E">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-list-item-group color="primary">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-instagram</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Akbank</v-list-item-title>
                  <v-subheader>TR270006217119644362736589</v-subheader>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-list-item-icon>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-twitter</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Yapıkredi</v-list-item-title>
                  <v-subheader>TR780006264939652379186164</v-subheader>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-btn class="customButtom mb-3 ml-3" small elevation="0"
            >Tümünü Göster</v-btn
          >
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-7">
      <v-col cols="6" md="4">
        <v-card class="pa-2 mr-2 rounded-lg" elevation="0">
          <h5 class="ma-1 font-weight-medium">Sosyal Medya</h5>
          <center>
            <v-list dense>
              <v-btn fab dark small absolute top right color="#038C3E">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-list-item-group color="primary">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-instagram</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>İnstagram</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-twitter</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Twitter</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </center>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="8">
        <v-card class="pa-2 mr-2 rounded-lg" elevation="0">
          <h5 class="ma-1 font-weight-medium">Yakında</h5></v-card
        >
      </v-col>
    </v-row>

    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      max-width="600"
    >
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar color="#038c3e" dark>Profili Düzenle</v-toolbar>
          <v-card-text>
            <div class="text-h2 pa-12">
              <v-text-field label="Madde" color="#038C3E"></v-text-field>
            </div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="dialog.value = false">Kapat</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    editProfile() {
      this.dialog = true;
    },
  },
  computed: {
    getProfilesData() {
      return this.$store.getters["profiles/getProfile"];
    },
  },
  async mounted() {
    await this.$store.dispatch("profiles/fetchAllData");
  },
};
</script>

<style scoped>
.profile-container {
  background-color: #fff !important;
}
.customButtom {
  text-transform: unset !important;
}
.profile-pictures {
  height: 50px !important;
  width: 50px !important;
}
</style>
