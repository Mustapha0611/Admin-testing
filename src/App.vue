<!-- <script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style> -->
<template>
  <div :class="{ rtl: $i18n.locale === 'ar', ltr: $i18n.locale !== 'ar' }">
    <router-view />
  </div>
</template>

<script>
export default {
  watch: {
    '$i18n.locale'(newLocale) {
      document.documentElement.setAttribute('dir', newLocale === 'ar' ? 'rtl' : 'ltr');
    }
  },
  mounted() {
    document.documentElement.setAttribute('dir', this.$i18n.locale === 'ar' ? 'rtl' : 'ltr');
  }
}
</script>

<style>
/* Global RTL and LTR styles */
.rtl {
  text-align: right;
  direction: rtl;
}

.ltr {
  text-align: left;
  direction: ltr;
}
</style>
