<template>
  <div class="">
    <div class="flex justify-end" v-if="activeTab==='Roles'">
      <button
        class="bg-main flex gap-4 justify-center items-center text-sm my-2 text-white py-3 px-6 rounded-3xl"
      @click="createRole"
        >
        <i class="pi pi-plus"></i>
        <span>Create Role</span>
      </button>
    </div>
    <section class="py-0 my-3 bg-white rounded-lg">
      <div class="tabs flex items-center justify-between gap-10">
        <button
          v-for="tab in tabs"
          :key="tab.name"
          class="py-3 w-[25%]"
          :class="{
            'border-b-[3px] rounded-sm border-main transition-all duration-100':
              activeTab === tab.name,
          }"
          @click="setActiveTab(tab.name)"
        >
          {{ tab.label }}
        </button>
      </div>
    </section>
    <section class="">
      <Profile v-if="activeTab === 'Profile'" />
      <AllUsers v-if="activeTab === 'All User Control'" />
      <Roles v-if="activeTab === 'Roles'" />
      <Permissions v-if="activeTab === 'Permission'"/>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Profile from "./Profile.vue";
import AllUsers from "./AllUsers.vue";
import Roles from "./Roles.vue";
import Permissions from "./Permissions.vue";
 const router = useRouter()
const tabs = ref([
  { name: "Profile", label: "Profile" },
  { name: "All User Control", label: "All User Control" },
  { name: "Roles", label: "Roles" },
  { name: "Permission", label: "Permission" },
]);

// Track the active tab
const activeTab = ref("All User Control");

// Function to change the active tab
const setActiveTab = (tabName) => {
  activeTab.value = tabName;
};
const createRole = () => {
 router.push('/Add-New-Role')
}
</script>

<style scoped>
/* Add any additional Tailwind styling here if needed */
</style>
