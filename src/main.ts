import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

const yanhaijing111: string[] = [];
console.log(yanhaijing111.includes(""));

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
