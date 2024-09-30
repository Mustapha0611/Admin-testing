<script setup>
import { ref } from 'vue';

import InputText from "primevue/inputtext";  // Added import for InputText
import Button from "primevue/button";

const value1 = ref('');
const value2 = ref('');
const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
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
      <section
        class="w-[500px] h-auto border-2 rounded-2xl py-8 px-4"
      >
        <h1 class="font-bold text-2xl">{{ $t('signup.header') }}</h1>
        <p class="py-2 mb-6">
         {{ $t('signup.subheading') }}
        </p>
        <form>
          <div class="w-full mb-2">
            <label for="number" class="font-semibold text-xs block py-1">
             {{$t('login.Phone number')}}
            </label>
            <InputText v-model="value1" placeholder="10000000" class="w-full py-3 " id="number" />
          </div>
          <div class="relative">
            <label
              for="password"
              class="block text-xs font-bold"
              >{{ $t('login.Choose Password') }}</label
            >
            <div class="mt-1">
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                v-model="password"
                class="block w-full px-3 py-3 rounded-2xl bg-slate-200 border  shadow-sm focus:outline-none hover:ring-gray-500 focus:border-2 focus:border-gray-400 sm:text-sm"
                placeholder="Enter your password"
              />
              <button
                type="button"
                @click="togglePassword"
                :class="
                  $i18n.locale === 'en'
                    ? 'absolute top-1/2 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none'
                    : 'absolute top-1/2 left-0 flex items-center pl-3 text-gray-500 hover:text-gray-700 focus:outline-none'
                "
              >
                <i
                  :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"
                  class="text-base transition-all duration-500"
                ></i>
              </button>
            </div>
          </div>
          <div class="py-6">
            <Button :label="$t('signup.create an account')" class="!bg-[#19c5af] w-full text-xs rounded-xl !border-0 py-4" />
          </div> 
        </form>
        <p class="text-center text-sm">{{ $t('signup.Already') }}<router-link to="/login" class="text-gray-600">{{ $t('signup.button') }}</router-link></p>
      </section>
    </div>
  </main>
</template>
