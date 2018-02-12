<template>
  <section id="values">
    <h2>Our Values</h2>
    <value-item title="Short term wins and long term success" :icon="icons.mountain">
      <p>We create value through helping you achieve short-term priorities while staying focused on the big picture.</p>
    </value-item>
    <divider offset />
    <value-item title="Smart technology choices, clear coding practices" :icon="icons.code">
      <p>Our purpose is to deliver <em>simple, maintainable code</em> that you'll never have to worry about as your business grows.</p>
      <p>We specialize in:<br/><em>React, Vue.js, Docker, Kubernetes</em></p>
    </value-item>
    <divider offset flip />
    <value-item title="User-centered and developer-friendly" :icon="icons.user">
      <p>We design software with the end user as heart and your team of developers in mind. Leave it to us to make sure your team always has the information and skills they need for a seamless transition.</p>
    </value-item>
    <divider offset arrow/>
  </section>
</template>

<script>
import ValueItem from "../molecules/ValueItem";
import Divider from "../atoms/Divider";

import codeSvg from "../../assets/icons/code.svg";
import mountainSvg from "../../assets/icons/mountain.svg";
import userSvg from "../../assets/icons/user.svg";

export default {
  name: "ValuesSection",
  components: {
    ValueItem,
    Divider
  },
  data() {
    return {
      icons: {
        code: codeSvg,
        mountain: mountainSvg,
        user: userSvg
      }
    };
  }
};
</script>

<style lang="postcss" scoped>
@import "../../styles/variables.css";

#values {
  display: flex;
  flex-direction: column;
}

h2 {
  width: 61.8%;
  align-self: flex-end;
}

.connector {
  height: 30vh;
}

</style>
