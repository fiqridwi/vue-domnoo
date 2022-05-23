import Vue from "vue";
import App from "./App.vue";
import { MdButton, MdDrawer, MdCard } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import VueResource from "vue-resource";
import VueScrollReveal from "vue-scroll-reveal";
// Vue.config.productionTip = false

new Vue({
  el: "#app",
  render: (h) => h(App),
});

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");

Vue.use(VueResource);

Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(MdCard);

Vue.use(VueScrollReveal, {
  duration: 800,
  scale: 1,
  distance: "50px",
});

Vue.http.options.root =
  "https://domnoo-77043-default-rtdb.asia-southeast1.firebasedatabase.app/";
