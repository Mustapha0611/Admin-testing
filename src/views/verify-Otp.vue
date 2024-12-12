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
        <span class="text-slate-800 text-center  px-10 lg:px-28 xl:px-40 mb-10 text-sm leading-relaxed ">
          Secure Your Account! Enter the One-Time Passcode (OTP) Sent to Your Registered Email for Added Verification</span
        >
      </div>
      <form action="" class="relative mx-auto w-full md:w-auto px-[5%]">

        <InputOtp v-model="optInput" integerOnly :length="6" />
        <p class="text-center pt-10">03 : 51 seconds remaining <span class="font-semibold">Resend</span></p>

        <div class="pt-10 pb-5 flex justify-center">
          <button
            class="md:min-w-96 min-w-full  text-white py-3 rounded-3xl"
            :class=" !optInput ? 'bg-slate-300':'bg-main'"
            :disabled="!optInput"
            
          >
           Verify OTP
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

      <router-link class="text-main mt-10" to="/Reset-password"
        >Forgot Password ?
      </router-link>
     
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";
import banner from "../components/util/banner.vue";
const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
const isDisabled = ref(true)
const optInput = ref('')
</script>
/