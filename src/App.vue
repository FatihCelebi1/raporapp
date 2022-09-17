<template>
  <div id="app">
    <div v-if="isLogin">
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
    <div v-else>
     <Login />
      </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import SideBar from "./components/SideBar.vue";
import AppBar from "./components/AppBar.vue";
import Login from "./views/LoginPage.vue";

export default {
  data() {
    return {
      isLogin: Cookies.get("accessToken"),
    };
  },

  name: "App",
  components: {
    SideBar,
    AppBar,
    Login,
  },
};
</script>
<style scoped>
.bg {
  background-color: #eff3f9 !important;
}
</style>
