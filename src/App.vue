<template>
  <v-app>
    <v-row no-gutters>
      <v-col cols="6" md="4">
        <navbar />
      </v-col>
      <v-col cols="12" sm="6" md="8">
        <router-view/>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import navbar from "./components/navbar.vue";

export default {
  name: "App",

  components: {
    navbar,
  },

  data: () => ({
    //
  }),
};
</script>
