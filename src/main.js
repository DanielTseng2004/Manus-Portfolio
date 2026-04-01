import { createApp } from "vue";
import "./assets/styles.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.vue";
import router from "./router/router.js";

const app = createApp(App);
app.use(router);
app.mount("#app");
