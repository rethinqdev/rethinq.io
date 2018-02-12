<template>
  <div id="app">
    <nav-bar/>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from "./components/organisms/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style>
@import "./styles/global.css";
</style>
