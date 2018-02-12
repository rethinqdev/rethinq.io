<template>
  <nav>
    <div class="container">
      <router-link to="/"><logo /></router-link>
      <nav-menu/>
    </div>
  </nav>
</template>

<script>
import Logo from "../atoms/Logo";
import NavMenu from "../molecules/NavMenu";

export default {
  name: "NavBar",
  components: {
    Logo,
    NavMenu
  }
};
</script>

<style scoped>
@import "../../styles/variables.css";

nav {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  height: var(--navbarHeight);
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
}

.container {
  display: flex;
  flex: 1;
  max-width: var(--containerWidth);
}
</style>
