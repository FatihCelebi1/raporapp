<template >
<div id="app" >
  <div v-if="test == 'a'">
   <LoginPage />
  </div>
   <div v-else>
  <v-app class="bg">
    <AppBar />
    <v-row no-gutters>
      <v-col cols="3" md="2">
        <SideBar />
      </v-col>
      <v-col cols="12" sm="8" md="9">     
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-app>
  </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import AppBar from "./components/AppBar.vue";
import LoginPage from "./views/LoginPage.vue";

export default {
  name: "App",
  components: {
    SideBar,
    AppBar,
    LoginPage,
  },
    data() {
    return {
      test: 'a'
    }}
};
</script>
<style scoped>
.bg{
  background-color: #eff3f9 !important;
}
</style>
