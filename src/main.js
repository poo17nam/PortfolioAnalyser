import { createApp } from "vue";
import App from "./App.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/lib/styles/main.sass";
import { createVuetify } from "vuetify";

import * as components from "vuetify/lib/components";
import * as directives from "vuetify/lib/directives";

const app = createApp(App);
const vuetify = createVuetify({ components, directives });

app.use(vuetify);
app.mount("#app");
