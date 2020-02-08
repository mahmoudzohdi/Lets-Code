<template>
  <div id="admin-content-body" :class="{'nav-opened': navVisibility}">
    <link
      href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
      rel="stylesheet"
    />
    <admin-header></admin-header>
    <router-view />
  </div>
</template>

<script>
import AdminHeader from "@/components/Admin/Header";
export default {
  components: {
    AdminHeader
  },
  computed: {
    navVisibility() {
      return this.$store.state.AdminStore.navVisibility;
    }
  }
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
}
</style>
