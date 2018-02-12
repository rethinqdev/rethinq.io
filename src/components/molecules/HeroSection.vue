<template>
  <section class="root">
    <Heading level="1">{{title}}</Heading>
    <slot/>
  </section>
</template>

<script>
import Heading from "../atoms/Heading";

export default {
  name: "HeroSection",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: {
    Heading
  }
};
</script>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 61.8%;
  margin: 15vh auto;

  font-size: 1.5em;
}
</style>
