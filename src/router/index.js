import Vue from "vue";
import VueRouter from "vue-router";

import IndexPage from "../components/pages/IndexPage";

Vue.use(VueRouter);

const routes = [{ path: "/", component: IndexPage }];

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
