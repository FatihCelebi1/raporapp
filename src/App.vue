<template>
  <div id="app">
      <v-app class="bg">
        <AppBar />
        <v-row>
          <v-col cols="3" md="2">
            <SideBar />
          </v-col>
          <v-col cols="12" sm="8" md="9">
            <router-view></router-view>
          </v-col>
        </v-row>
         <v-footer dark padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>RaporApp</strong>
    </v-col>
  </v-footer>
      </v-app>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import AppBar from "./components/AppBar.vue";


export default {

  name: "App",
  components: {
    SideBar,
    AppBar,
  },
};
</script>
<style scoped>
.bg {
  background-color: #eff3f9 !important;
}
</style>
