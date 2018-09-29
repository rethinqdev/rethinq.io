<template>
  <div id="app">
    <header><NavBar /></header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/organisms/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import "./styles/global.scss";
</style>
