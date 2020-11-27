import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollTo from "vue-scrollto";

createApp(App)
  .use(VueScrollTo)
  .use(router)
  .mount("#app");
