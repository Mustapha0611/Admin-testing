<template>
  <div class="bg-slate-50 flex">
    <section class="">
      <sideBar />
    </section>
    <section class="flex-1 p-4">
      <headerContent />
      <div class="w-full h-auto bg-white my-8 rounded-2xl p-3">
        <detailsHeader />
        <section class="relative">
            <div class="relative pt-20 px-6">
                <span class="absolute -top-24 left-6"><img src="@/assets/user-image.png" alt="user" class=""></span>
                <p class="font-semibold mb-2">Zainab Ahmad</p>
                <p class="">User</p>
            </div>
            <DetailMain />
            <updateUser v-if="popUpControl.showUpdateModal" />
        </section>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { usepopUpControl } from "@/stores/popUpControl";
import DetailMain from "@/components/users/userDetails/DetailMain.vue";
import updateUser from "@/components/users/userDetails/updateUser.vue";
import sideBar from "@/components/Dashboard/sideBar.vue";
import headerContent from "@/components/Dashboard/headerContent.vue";
import detailsHeader from "@/components/users/userDetails/detailsHeader.vue";
const popUpControl = usepopUpControl()
</script>
