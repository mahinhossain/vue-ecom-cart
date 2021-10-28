import { createApp } from "vue";

import store from "./store";
import App from "./App.vue";
import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);

app.use(VueSweetalert2);
app.use(store);

app.use(router).mount("#app");
