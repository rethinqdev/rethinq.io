<template>
  <svg :class="svgClasses" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path v-if="offset" d="M80,0 L80,50 L20,50 L20,95" vector-effect="non-scaling-stroke"/>
    <path v-if="arrow" d="M18,90 L20,95 L22,90" vector-effect="non-scaling-stroke"/>
  </svg>
</template>

<script>
export default {
  name: "Divider",
  computed: {
    svgClasses() {
      return {
        connector: true,
        flip: this.flip
      };
    }
  },
  props: {
    offset: {
      type: Boolean,
      default: false
    },
    flip: {
      type: Boolean,
      default: false
    },
    arrow: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="postcss" scoped>
svg.flip {
  transform: scaleX(-1);
}

path {
  fill: none;
  stroke: red;
  stroke-width: 12;
  stroke-linejoin: round;
}
</style>
