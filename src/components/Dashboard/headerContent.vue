<template>
  <div class="flex">
    <section class=" flex flex-col gap-4">
      <aside v-if="route.path ==='/AllUsers'|| route.path==='/user-details'">
        All Users / Users <span v-if="route.path ==='/user-details'"> / UserDetails</span>
      </aside>
      <span class="text-2xl font-semibold"> 
        WeQuickPay Users
      </span>
    </section>
    <section class="flex ml-auto items-start gap-5 ">
      <button class="flex items-center gap-2 bg-white px-3 py-3 rounded-3xl">
      <img src="@/assets/menu.svg" alt="" /><span class="text-xs">Menu</span>
    </button>
    <button><span class="pi pi-bell p-2 rounded-full bg-white"></span></button>
    <button class="bg-white flex items-center gap-2 py-1 px-3 rounded-3xl">
      <span class="pi pi-user p-2 rounded-full bg-black text-white"></span
      ><span class="text-xs">Faith Unjunwo..</span>
    </button>
    <button class="p-2 rounded-full bg-white">
      <img src="@/assets/logout.svg" alt="logout" />
    </button>
    </section>
   
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>
