/**
 * @vue/cli Configuration
 * - https: //cli.vuejs.org/config/#vue-config-js
 */

module.exports = {
  css: {
    sourceMap: process.env.NODE_ENV === "development",
    loaderOptions: {
      sass: {
        data: `@import "@/styles/variables.scss";`
      }
    }
  }
};
