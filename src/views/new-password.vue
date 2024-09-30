<template>
  <div class="flex h-screen justify-center">
    <section class="flex-1 bg-main hidden lg:block">
      <banner />
    </section>
    <section class="flex-1 flex flex-col items-center justify-center">
      <div class="flex justify-center gap-3 items-center py-5">
        <span>
          <img src="@/assets/logo.png" alt="logo" />
        </span>
        <span class="text-xl font-semibold text-main"> WeQuickPay </span>
      </div>
      <div class="flex justify-center flex-col gap-3 items-center">
        <span class="text-center text-sm py-5 text-slate-950 lg:px-28 xl:px-44 md:px-20 px-10"
          >Protect Your We Quick Pay Account! Create Your Password to Safeguard
          Your Financial Transactions</span
        >
      </div>
      <form action="" class="relative mx-auto w-full md:w-auto px-[5%]">
        <div class="relative my-5">
          <label for="password" class="block text-xs">Password</label>
          <div class="mt-1">
            <input
              :type="showPassword1 ? 'text' : 'password'"
              id="password"
              v-model="password"
              class="block px-3 py-3 md:min-w-96 min-w-[100%] rounded-3xl bg-slate-100 border shadow-sm focus:outline-none hover:ring-gray-500 focus:border focus:border-gray-200 sm:text-sm"
              placeholder="Enter your password"
            />
            <button
              type="button"
              @click="togglePassword1"
              class="absolute top-1/2 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <i
                :class="showPassword1 ? 'pi pi-eye-slash' : 'pi pi-eye'"
                class="text-sm transition-all duration-500"
              ></i>
            </button>
          </div>
        </div>
        <div class="relative my-5">
          <label for="password" class="block text-xs">Password</label>
          <div class="mt-1">
            <input
              :type="showPassword2 ? 'text' : 'password'"
              id="password"
              v-model="password"
              class="block px-3 py-3 md:min-w-96 min-w-[100%] rounded-3xl bg-slate-100 border shadow-sm focus:outline-none hover:ring-gray-500 focus:border focus:border-gray-200 sm:text-sm"
              placeholder="Enter your password"
            />
            <button
              type="button"
              @click="togglePassword2"
              class="absolute top-1/2 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <i
                :class="showPassword2 ? 'pi pi-eye-slash' : 'pi pi-eye'"
                class="text-sm transition-all duration-500"
              ></i>
            </button>
          </div>
        </div>
       
        <div class="pt-10 pb-5">
          <button
            class="md:min-w-96 min-w-full bg-main text-white py-3 rounded-3xl"
          >
            Login
          </button>
        </div>
      </form>
      <section class="flex justify-center gap-5 text-main">
        <a href="" class="flex gap-2 items-center"
          ><img src="@/assets/faqs.png" alt="Faqs" /> FAQs</a
        ><a href="" class="flex gap-2 items-center"
          ><img src="@/assets/support.svg" alt="Support" /> Contact Support</a
        >
      </section>
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";
import banner from "../components/banner.vue";
const showPassword1 = ref(false);
const showPassword2 = ref(false)

const togglePassword1 = () => {
  showPassword1.value = !showPassword1.value;
};
const togglePassword2 = () => {
  showPassword2.value = !showPassword2.value;
};
</script>
