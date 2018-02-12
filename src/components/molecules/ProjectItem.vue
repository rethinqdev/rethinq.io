<template>
  <div class="value">
    <i v-html="logo" />
    <div class="content">
      <h3>{{title}}</h3>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectItem",
  props: {
    title: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="postcss" scoped>
.value {
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;

}

i {
  margin-top: 1em;
  width: 40%;  
}

.content {
  width: 50%;
}
</style>
