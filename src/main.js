import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import globalComponents from "@/components/Shared/globalComponents.js";
import "@/firebase/index";
Vue.config.productionTip = false;

globalComponents.forEach(component => {
  Vue.component(component.name, component);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
