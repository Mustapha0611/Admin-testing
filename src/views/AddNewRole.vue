<template>
  <div class="bg-slate-50 flex">
    <section class="">
      <sideBar />
    </section>
    <section class="flex-1 p-4 ">
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
        <Permissions v-if="activeTab === 'Permission'" />
      </section>
      <div class="p-6 bg-white my-10" v-if="activeTab ==='Roles'">
        <!-- Search and Action bar -->
        <section class="flex items-center justify-between py-2 gap-6">
          <div class="flex flex-1 gap-3 items-center">
            <span>Role name</span>
            <div class="w-[80%]">
              <InputText v-model="searchQuery" placeholder="" fluid />
            </div>
          </div>
          <div class="flex items-center flex-1 gap-2">
            <span>Date</span>
            <div class="w-[80%]">
              <DatePicker
                showIcon
                fluid
                iconDisplay="input"
                class="!rounded-3xl"
                inputId="icondisplay"
                v-model="date"
              />
            </div>
          </div>
        </section>

        <!-- Data Table -->
        <table class="w-full border-collapse mt-4">
          <thead>
            <tr class="bg-main text-white">
              <!-- Placeholder for checkbox column -->

              <th class="py-4 px-4 text-sm font-light text-start">
                Module Permission
              </th>
              <th class="py-4 px-4 text-sm font-light text-start">Read</th>
              <th class="py-4 px-4 text-sm font-light text-start">Write</th>
              <th class="py-4 px-4 text-sm font-light text-start">Delete</th>
              <th class="py-4 px-4 text-sm font-light text-start">Update</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b-2  border-slate-100">
              <td class="py-6 px-4 text-sm font-light text-start">
                Role Permission
              </td>
              <td class="py-6 px-6 text-sm font-light text-start">
                <input
                  type="checkbox"
                  v-model="selectedAccounts"
                  :value="account"
                  class="h-4 aspect-square accent-indigo-800"
                />
              </td>
              <td class="py-6 px-6 text-sm font-light text-start">
                <input
                  type="checkbox"
                  v-model="selectedAccounts"
                  :value="account"
                  class="h-4 aspect-square accent-indigo-800"
                />
              </td>
              <td class="py-6 px-6 text-sm font-light text-start">
                <input
                  type="checkbox"
                  v-model="selectedAccounts"
                  :value="account"
                  class="h-4 aspect-square accent-indigo-800"
                />
              </td>
              <td class="py-4 px-4 text-sm font-light text-start">
                <input
                  type="checkbox"
                  v-model="selectedAccounts"
                  :value="account"
                  class="h-4 aspect-square accent-indigo-800"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Pagination -->
        <!-- <div class="flex justify-center mt-4">
            <Pagination
              v-model:page="currentPage"
              :total-records="filteredAccounts.length"
              rows="10"
              :rows-per-page-options="[10, 20, 50]"
            />
          </div> -->
        <div class="flex justify-end">
          <button
            class="bg-main flex gap-4 justify-center items-center text-sm my-10 text-white py-3 px-6 rounded-3xl"
          >
            <span>Save new Role</span>
          </button>
        </div>
      </div>

    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Profile from "@/components/Settingss/Profile.vue";
import AllUsers from "@/components/Settingss/AllUsers.vue";
import Permission from "@/components/Settingss/Permissions.vue"
const tabs = ref([
  { name: "Profile", label: "Profile" },
  { name: "All User Control", label: "All User Control" },
  { name: "Roles", label: "Roles" },
  { name: "Permission", label: "Permission" },
]);

// Track the active tab
const activeTab = ref("Roles");

// Function to change the active tab
const setActiveTab = (tabName) => {
  activeTab.value = tabName;
};
</script>
