<template>
  <component :is="tag"><slot/></component>
</template>

<script>
export default {
  name: "Heading",
  props: {
    level: {
      type: [String, Number],
      required: true,
      validator: value => value > 0 && value <= 6
    }
  },
  computed: {
    tag() {
      return this.level ? `h${this.level}` : "p";
    }
  }
};
</script>

<style>

</style>
