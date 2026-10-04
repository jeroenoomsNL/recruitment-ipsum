import { createApp } from "vue";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/figtree";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./styles/main.css";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
