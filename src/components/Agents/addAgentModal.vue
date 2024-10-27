<template>
  <div
    class="bg-black/20 fixed flex items-center justify-center h-screen w-full top-0 left-0 z-50"
  >
    <form class="h-auto bg-white w-[70%] rounded-3xl px-10">
      <h1 class="mt-16 text-center font-semibold text-xl">
        Add Agent
      </h1>
      <div class="flex py-2 gap-4">
        <section class="flex-1">
          <label for="first-name" class="text-xs">First name</label>
          <input
            type="text"
            id="first-name"
            class="w-full px-4 py-2 rounded-3xl border focus:outline-none"
          />
        </section>
        <section class="flex-1">
          <label for="last-name" class="text-xs">Last name</label>
          <input
            type="text"
            id="first-name"
            class="w-full px-4 py-2 rounded-3xl border focus:outline-none"
          />
        </section>
        
      </div>
      <div class="flex py-2 gap-2">
        <section class="flex-1">
          <label for="Email" class="text-xs">Email</label>
          <input
            type="mail"
            id="Email"
            class="w-full px-4 py-2 rounded-3xl border focus:outline-none"
          />
        </section>
        <section class="flex-1">
          <label for="username" class="text-xs">user name</label>
          <input
            type="text"
            id="username"
            class="w-full px-4 py-2 rounded-3xl border focus:outline-none"
          />
        </section>
        
      </div>
      <div class="flex py-2 gap-2">
        <section class="flex-1">
          <label for="Email" class="text-xs">Email</label>
          <input
            type="mail"
            id="Email"
            class="w-full px-4 py-2 rounded-3xl border focus:outline-none"
          />
        </section>
      <section class="flex-1  mt-1">
        <label for="first-name" class="text-xs block mb-1">Role</label>
        <Select
          v-model="selectedRole"
          :options="filterRole"
          optionLabel="name"
          placeholder="Select agent role"
          :highlightOnSelect="false"
          class="w-full text-xs py-1"
        />
      </section>
      </div>
      <div class="flex py-2 gap-2">
        <section class="flex-1">
          <label for="Password" class="text-xs">Password</label>
          <input
            type="password"
            id="Password"
            class="w-full px-4 py-2 rounded-3xl border focus:outline-none"
          />
        </section>
      <section class="flex-1  mt-1">
        <label for="first-name" class="text-xs block mb-1">Automatically send login details to email</label>
        <Select
          v-model="selectedOption"
          :options="filterOptions"
          optionLabel="name"
          placeholder="Select Option"
          :highlightOnSelect="false"
          class="w-full text-xs py-1"
        />
      </section>
      </div>
      <section class="my-5 flex justify-end gap-20 py-10">
        <button
          class="py-3 rounded-3xl bg-gray-200 text-white text-xs text-center px-10 w-44"
          disabled
        >
          Cancel
        </button>
        <button
          class="py-3 rounded-3xl bg-main text-white text-xs text-center px-10 w-44"
        >
          Add Agent
        </button>
      </section>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";

const filterRole = ref([
  { name: "Support" },
  { name: "Admin" },
]);
const selectedRole = ref('')


const filterOptions = ref([
  { name: "Yes" },
  { name: "No" },
]);
const selectedOption = ref('')
</script>
