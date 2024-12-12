<template>
  <div class="bg-slate-50 flex">
    <section class="">
      <sideBar />
    </section>
    <section class="flex-1 p-4">
      <headerContent />
      <div class="flex justify-end">
        <router-link
          to="/Transactions"
          class="flex bg-main text-white rounded-3xl py-2.5 px-6 gap-2"
          ><img src="@/assets/arrow-back.svg" class="w-5 h-4" /><span
            class="text-sm font-semibold"
            >Back</span
          ></router-link
        >
      </div>
     
        <receipt />
    
    </section>
  </div>
</template>
<script setup>
import sideBar from "@/components/util/sideBar.vue";
import receipt from "@/components/transactions/receipt.vue";
import headerContent from "@/components/util/headerContent.vue";
</script>
