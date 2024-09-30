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
        <span class="text-xl font-semibold text-slate-950"> Login </span>
        <span class="text-slate-800"> For WeQuickPay Staff only </span>
      </div>
      <form action="" class="relative mx-auto  w-full md:w-auto px-[5%]">
        <div class="my-5 flex flex-col justify-centerr">
          <label for="email" class="block text-xs ">Email</label>
          <div class="mt-1">
            <input
              type="mail"
              id="mail"
              v-model="mail"
              class=" px-3 py-3 md:min-w-96 min-w-[100%]  rounded-3xl bg-slate-100 border shadow-sm focus:outline-none hover:ring-gray-500 focus:border focus:border-gray-200 sm:text-sm"
              placeholder="Enter your mail"
            />
          </div>
        </div>
          <div class="relative my-5 ">
            <label
              for="password"
              class="block text-xs"
              >Password</label
            >
            <div class="mt-1">
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                v-model="password"
                class="block px-3 py-3 md:min-w-96 min-w-[100%] rounded-3xl bg-slate-100 border shadow-sm focus:outline-none hover:ring-gray-500 focus:border focus:border-gray-200 sm:text-sm"
                placeholder="Enter your password"
              />
              <button
                type="button"
                @click="togglePassword"
                class="absolute top-1/2 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                   
              >
                <i
                  :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"
                  class="text-sm transition-all duration-500"
                ></i>
              </button>
            </div>
          </div>
          <div class="flex justify-center gap-2 items-center py-2">
            <span>
              <input type="checkbox" name="remember"  class=" accent-slate-100 w-4 h-4 rounded-xl" id="Remember me">
            </span>
            <label for="Remember me"> Remember Password</label>
          </div>
          <div class="pt-10 pb-5 ">
            <button class="md:min-w-96 min-w-full bg-main text-white py-3 rounded-3xl">Login</button>
          </div>
      </form>
      <section class="flex justify-center gap-5 text-main">
      <a href="" class="flex gap-2 items-center"><img src="@/assets/faqs.png" alt="Faqs" /> FAQs</a
      ><a href="" class="flex gap-2 items-center"><img src="@/assets/support.svg" alt="Support" /> Contact Support</a>
    </section>
   
       <router-link class="text-main mt-10" to="/Reset-password">Forgot Password ? </router-link>

    </section>
  </div>
</template>
<script setup>
import{ ref } from 'vue'
import banner from "../components/banner.vue";
const showPassword = ref(false)

const togglePassword = () =>{
  showPassword.value = !showPassword.value
}
</script>
