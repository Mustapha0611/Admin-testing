<template>
  <div
    class="bg-black/20 fixed flex items-center justify-center h-screen w-full top-0 left-0 z-50"
  >
    <form class="h-auto bg-white w-[40%] rounded-3xl px-10">
      <h1 class="my-5 text-center font-semibold text-xl">
        Updater User details
      </h1>
      <section class="flex flex-col py-2 gap-2">
        <label for="first-name" class="text-xs">First name</label>
        <input
          type="text"
          id="first-name"
          class="w-full px-4 py-2 rounded-3xl border focus:outline-none"
        />
      </section>
      <section class="flex flex-col py-2 gap-2">
        <label for="last-name" class="text-xs">Last name</label>
        <input
          type="text"
          id="last-name"
          class="w-full px-4 py-2 rounded-3xl border focus:outline-none"
        />
      </section>
      <section class="flex flex-col py-2 gap-2">
        <label for="first-name" class="text-xs">Account type</label>
        <Select
          v-model="selectedAccountType"
          :options="filterOptions"
          optionLabel="name"
          placeholder="Account type"
          :highlightOnSelect="false"
          class="w-full md:w-auto"
        />
      </section>
      <section class="flex flex-col py-2 gap-2">
        <label for="first-name" class="text-xs">Email</label>
        <input
          type="mail"
          id="first-name"
          class="w-full px-4 py-2 rounded-3xl border focus:outline-none"
        />
      </section>
      <section class="flex flex-col py-2 gap-2">
        <label for="first-name" class="text-xs">Transaction Pin</label>
        <input
          type="text"
          id="first-name"
          class="w-full px-4 py-2 rounded-3xl border focus:outline-none"
        />
      </section>
      <section class="flex flex-col py-2 gap-2">
        <label for="first-name" class="text-xs">Password</label>
        <input
          type="password"
          id="first-name"
          class="w-full px-4 py-2 rounded-3xl border focus:outline-none"
        />
      </section>
      <section class="my-5">
        <button class="py-2.5 rounded-3xl bg-main text-white text-center w-full">
          Save Changes
        </button>
      </section>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const filterOptions = ref([
  { name: "Personal Account" },
  { name: "Business Account" },
]);
</script>