import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@/presets/aura";
import ToastService from "primevue/toastservice";
import "primeicons/primeicons.css";

import "./assets/main.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(PrimeVue, {
  unstyled: true,
  pt: Aura,
  theme:{
    options:{
      darkModeSelector: '.none'
    }
  }
 
});
app.use(createPinia());
app.use(router);
app.use(ToastService);
app.mount("#app");
