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
        <span class="text-xl font-semibold text-slate-950"
          >Forgotten Password ?
        </span>
        <span class="text-slate-800 text-center px-5 md:px-20 text-sm leading-relaxed">
          Experiencing difficulty recalling your password? Fear not, as we've
          got your back. Losing access to your account can be challenging, but
          worry not; we're here to assist you in recovering it.</span
        >
      </div>
      <form action="" class="relative mx-auto w-full md:w-auto px-[5%]">
        <div class="my-5 flex flex-col justify-centerr">
          <label for="email" class="block text-xs">Email</label>
          <div class="mt-1">
            <input
              type="mail"
              id="mail"
              v-model="mail"
              class="px-3 py-3 md:min-w-96 min-w-[100%] rounded-3xl bg-slate-100 border shadow-sm focus:outline-none hover:ring-gray-500 focus:border focus:border-gray-200 sm:text-sm"
              placeholder="Enter your mail"
            />
          </div>
        </div>

        <div class="py-5">
          <button
            class="md:min-w-96 min-w-full text-white py-3 rounded-3xl"
            :class="!mail ? 'bg-slate-300' : 'bg-main'"
            :disabled="!mail"
          >
            Send Instruction
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
const showPassword = ref(false);
import { useToast } from "primevue/usetoast";


const toast = useToast();
// const isDisabled = ref(true)
const mail = ref("");

const resetPass = () => {
  if (!mail.value) {
    toast.add({
      severity: "error",
      message: "Please enter a valid email",
      life: 3000,
    });
  }
};
</script>
