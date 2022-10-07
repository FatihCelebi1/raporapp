<template>
  <v-navigation-drawer left color="#fefefe" class="sidebar-item" hide-overlay>
    <v-img src="https://gurmewoo.com/wp-content/uploads/2022/10/Bir-baslik-ekleyin.svg" class="ma-5 mb-10"></v-img>
    <v-list v-for="item in items" :key="item.title" class="list" link>
      <v-list-item-group v-model="selectedItem" color="#038c3e">
        <v-list-item :to="item.link" class="ml-2 mr-2" dense>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Ana Sayfa", icon: "mdi-view-dashboard", link: "/" },
        { title: "Profilim", icon: "mdi-account", link: "/profile" },
        {
          title: "Harcamalarım",
          icon: "mdi-format-list-checks",
          link: "/reports",
        },
      ],
    };
  },
};
</script>
<style scoped>
.sidebar-item {
  border-right: 1px solid #e9e9ef !important;
}
</style>