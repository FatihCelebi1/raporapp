<template>
  <div id="app">
      <v-app class="bg">
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


export default {

  name: "App",
  components: {
    SideBar,
  },
};
</script>
<style scoped>
.bg {
  background-color: #f5f5fb !important;
}
</style>
