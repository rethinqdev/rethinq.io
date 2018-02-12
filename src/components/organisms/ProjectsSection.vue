<template>
  <section id="projects">
    <h2>Featured Projects</h2>
    <project-item title="Squadlocker" :logo="logos.squadlocker">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus error, deleniti temporibus voluptates perferendis suscipit! Magnam, repudiandae sit neque aliquid velit tempora maxime, fugit recusandae laboriosam sequi harum deserunt veniam?
    </project-item>
  </section>
</template>

<script>
import ProjectItem from "../molecules/ProjectItem";
import sqdLogo from "../../assets/icons/squadlocker.svg";
import Divider from "../atoms/Divider";

export default {
  name: "ProjectsSection",
  data() {
    return {
      logos: {
        squadlocker: sqdLogo
      }
    };
  },
  components: {
    Divider,
    ProjectItem
  }
};
</script>

<style scoped>
#projects {
  display: flex;
  flex-direction: column;
}

h2 {
  align-self: flex-end;
  width: 50%;
}
</style>
