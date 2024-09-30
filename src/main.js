import ar from "./assets/i18n/ar.json";
import en from "./assets/i18n/en.json";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@/presets/aura";

import "primeicons/primeicons.css";

import "./assets/main.css";
import App from "./App.vue";
import router from "./router";

const i18n = createI18n({
  locale: "en",
  messages: {
    ar: ar,
    en: en,
  },
});

const app = createApp(App);

app.use(PrimeVue, {
  unstyled: true,
  pt: Aura,
});
app.use(i18n);
app.use(createPinia());
app.use(router);

app.mount("#app");

i18n.watchLocale(() => {
  const locale = i18n.global.locale
  document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr')
  document.body.className = locale === 'ar' ? 'rtl' : 'ltr'
})