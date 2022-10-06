<template>
  <v-container class="mt-5">
    <v-row no-gutters>
      <v-col cols="6" md="4">
        <v-card class="pa-2 mr-2" elevation="0">
          <center>
            <div class="mr-5 ml-5">
              <v-btn fab dark small absolute top right color="#038C3E">
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

              <h3 class="mt-2 title">Fatih Çelebi</h3>
              <p class="mt-2 mb-1 caption">Firma : Gurmesoft</p>
              <p class="mt-1 caption">Sakarya Mahallesi 4.Düz Sokak No.13</p>
              <v-btn class="customButtom mb-5" outlined>Profili Düzenle</v-btn>
            </div>
          </center>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="8">
        <v-card class="pa-2" outlined tile>
          <p class="subtitle-2">Banka Hesaplarım</p>
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
            <v-btn class="customButtom mb-3 ml-3" small elevation="0">Tümünü Göster</v-btn>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-7">
      <v-col cols="6" md="4">
        <v-card class="pa-2 mr-2" elevation="0">
          <center>
            <v-list dense>
              <v-btn fab dark small absolute top right color="#038C3E">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-subheader>Sosyal Medya</v-subheader>
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
        <v-card class="pa-2" outlined tile> Buraya kararsızım </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
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
