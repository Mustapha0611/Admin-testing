<script setup>
import { ref } from "vue";
import Password from "primevue/password";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

import Checkbox from "primevue/checkbox";

const value1 = ref("");
const value2 = ref("");
const check = ref(false);
</script>

<template>
  <main>
    <div class="flex items-center justify-center h-[100dvh] px-20 gap-20">
      <section>
        <div class="w-[400px] h-[200px]">
          <img
            src="@/assets/logo-image.png"
            alt="brand logo"
            class="w-full h-full"
          />
        </div>
      </section>
      <section class="w-[500px] h-auto border-2 rounded-2xl py-8 px-4">
        <h1 class="font-bold text-2xl">{{ $t("verifyPhone.header") }}</h1>
        <p class="py-2 mb-6">
          {{ $t("verifyPhone.subheading") }}
        </p>
        <form>
          <div class="w-full mb-2">
            <label for="number" class="font-semibold text-xs block py-1">
             {{$t('login.Phone number')}}
            </label>
            <InputText
              v-model="value1"
              placeholder="10000000"
              class="w-full py-3"
              id="number"
            />
          </div>

          <div class="py-6">
            <Button
              :label="$t('verifyPhone.button')"
              class="!bg-[#19c5af] w-full text-sm rounded-xl !border-0 py-4"
            />
          </div>
        </form>
      </section>
    </div>
  </main>
</template>
