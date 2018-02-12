<template>
  <ul>
    <li v-for="(item, i) in items" :key="i">
      <router-link :to="item.to">{{item.title}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      items: [
        { to: "#values", title: "Our Values" },
        { to: "#services", title: "Services" },
        { to: "#projects", title: "Projects" },
        { to: "#team", title: "Our Team" },
        { to: "#contact", title: "Contact" }
      ]
    };
  }
};
</script>

<style scoped lang="postcss">
@import "../../styles/variables.css";

ul {
  display: flex;
  align-items: center;
  margin: 0 0 0 auto;
  padding: 0;
  list-style: none;
}

li {
  margin: 0 1rem;
}
a {
  display: inline-block;
  position: relative;
  color: inherit;
  font-weight: bold;
  font-family: var(--headingFontFamily);
  padding: 0.5rem 0;
  text-transform: uppercase;
  text-decoration: none;

  &.router-link-active:after {
    content: "";
    position: absolute;
    bottom: -0.25em;
    left: -2px; right: -2px;
    height: 2px;
    background-color: var(--primaryColor);
    
  }
}
</style>
