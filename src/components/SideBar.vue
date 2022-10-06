<template>
  <v-navigation-drawer left class="accent-4" color="#038C3E" dark permanent>
    <v-list v-for="item in items" :key="item.title" link>
      <v-list-item :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
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
        { title: "Harcamalarım", icon: "mdi-format-list-checks", link: "/reports" },
        
      ],
    };
  },
};
</script>
