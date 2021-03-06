"use strict";

require("./assets/images/me.jpg");
require("./assets/images/ajax-loader.gif");

import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: "history"
});

new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});
