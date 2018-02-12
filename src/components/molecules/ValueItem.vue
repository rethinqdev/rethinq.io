<template>
  <div class="value">
    <i v-html="icon" />
    <div class="content">
      <h3>{{title}}</h3>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ValueItem",
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="postcss" scoped>
.value {
  display: flex;
  font-size: 1.5rem;

  &:nth-of-type(odd) {
    & .content {
      order: 2
    }
  }
}

i {
  position: relative;
  flex: 1;
  order: 1;
  
  padding: 0 2em;
}

.content {
  width: 61.8%;
}

h3 {
  font-size: 1.5em;
}
</style>
