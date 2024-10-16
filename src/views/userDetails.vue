<template>
  <div class="bg-slate-50 flex">
    <section class="">
      <sideBar />
    </section>
    <section class="flex-1 p-4">
      <headerContent />
      <div class="w-full h-screen bg-white mt-8 rounded-2xl p-3">
        <detailsHeader />
        <section class="relative">
            <div class="relative pt-20 px-6">
                <span class="absolute -top-24 left-6"><img src="@/assets/user-image.png" alt="user" class=""></span>
                <p class="font-semibold mb-2">Zainab Ahmad</p>
                <p class="">User</p>
            </div>
        </section>
      </div>
    </section>
  </div>
</template>
<script setup>
import sideBar from "@/components/Dashboard/sideBar.vue";
import headerContent from "@/components/Dashboard/headerContent.vue";
import detailsHeader from "@/components/users/userDetails/detailsHeader.vue";
</script>
