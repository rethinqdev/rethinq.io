<template>
  <div id="home">
    <hero-section title="Simple, straightforward design & development">
      <p>We help companies build software that's <em>simple, scalable,</em> and <em>easily maintainable.</em></p>
    </hero-section>
    <values-section />
    <services-section />
    <projects-section />
  </div>
</template>

<script>
import HeroSection from "../molecules/HeroSection";
import ProjectsSection from "../organisms/ProjectsSection";
import ServicesSection from "../organisms/ServicesSection";
import ValuesSection from "../organisms/ValuesSection";

export default {
  name: "HomePage",
  components: {
    HeroSection,
    ProjectsSection,
    ServicesSection,
    ValuesSection
  }
};
</script>

<style lang="postcss">
@import "../../styles/variables.css";

#home {
  & h2 {
    color: var(--primaryColor);
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: var(--navbarHeight);
  }

  & h3 {
    font-size: 2.25rem;
  }
}

</style>
