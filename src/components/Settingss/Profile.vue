<template>
  <div class="w-full bg-white rounded-lg my-10 p-10">
    <div>
      <button
        class="flex item center justify-center px-8 gap-2 text-sm bg-main text-gray-50 py-3 rounded-3xl"
      @click="showModal"
        >
        <i class="pi pi-pencil"></i> <span>Edit Details</span>
      </button>
    </div>
    <section class="flex items-center mt-8">
        <span class="flex-1">First Name</span>
        <span class="px-5 py-2.5 flex-1 border rounded-3xl">Faith</span>
    </section>
    <section class="flex items-center mt-8">
        <span class="flex-1">Last Name</span>
        <span class="px-5 py-2.5 flex-1 border rounded-3xl">Ozor</span>
    </section>
    <section class="flex items-center mt-8">
        <span class="flex-1">Email</span>
        <span class="px-5 py-2.5 flex-1 border rounded-3xl">FaithOzor@gmail.com</span>
    </section>
    <section class="flex items-center mt-8">
        <span class="flex-1">Username</span>
        <span class="px-5 py-2.5 flex-1 border rounded-3xl">FaithOzor</span>
    </section>
    <section class="flex items-center mt-8">
        <span class="flex-1">Phone</span>
        <span class="px-5 py-2.5 flex-1 border rounded-3xl">0803214543424</span>
    </section>
    <section class="flex items-center mt-8">
        <span class="flex-1">Role</span>
        <span class="px-5 py-2.5 flex-1 border rounded-3xl">Admin</span>
    </section>
    <section class="flex items-center mt-8">
        <span class="flex-1">Password</span>
        <span class="px-5 py-2.5 flex-1 border rounded-3xl">********</span>
    </section>
    <section class="flex items-center mt-8">
        <span class="flex-1">Profile Image</span>
        <span class="flex-1"><img src="@/assets/pp.png" alt="pp"></span>
    </section>
  </div>
<updateProfile v-if="isOpen" @cancel="isOpen = false"/>
</template>
<script setup>
import { ref } from 'vue';
import updateProfile from './updateProfile.vue';
let isOpen = ref(false)
const showModal = ()=>{
 isOpen.value = !isOpen.value
}
</script>
