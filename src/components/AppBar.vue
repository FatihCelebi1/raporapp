<template>
  <div>
    <v-app-bar color="#038C3E" >
      
      <v-toolbar-title><v-img src="../assets/logo.png"></v-img></v-toolbar-title>
          <v-spacer></v-spacer>
      <v-menu offset-y >
        <template v-slot:activator="{ on, attrs }" >
          <v-btn v-bind="attrs" v-on="on"   elevation="0">
            Fatih Çelebi<v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title><v-icon class="mr-1">mdi-account</v-icon>Profil</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><v-icon class="mr-1">mdi-logout-variant</v-icon>Çıkış Yap</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
