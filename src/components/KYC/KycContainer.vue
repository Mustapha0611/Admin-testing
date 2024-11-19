<template>
    <div class="">
      <!-- Search and Action bar -->
      <section class="flex items-center justify-center py-10 gap-4 p-6 bg-white">
        <div class="">
          <IconField class="xl:w-[20rem] w-full">
            <InputText v-model="searchQuery" placeholder="Search" fluid />
            <InputIcon class="pi pi-search" />
          </IconField>
        </div>
        <div class="flex items-center gap-2">
          <span>Bulk Action</span>
          <Select
            v-model="selectedBulkAction"
            :options="bulkActions"
            optionLabel="name"
            placeholder="Select Action"
            :highlightOnSelect="false"
            class="w-full md:w-auto"
          />
        </div>
        <div class="flex items-center gap-3">
          <span>Filter by:</span>
          <Select
            v-model="selectedFilter"
            :options="filterOptions"
            optionLabel="name"
            placeholder="Select an option"
            :highlightOnSelect="false"
            class="w-full md:w-auto"
          />
        </div>
      </section>
      <section>
        <div class="grid grid-cols-3">
            div
        </div>
      </section>
  
  
      <!-- Pagination -->
      <!-- <div class="flex justify-center mt-4">
          <Pagination
            v-model:page="currentPage"
            :total-records="filteredAccounts.length"
            rows="10"
            :rows-per-page-options="[10, 20, 50]"
          />
        </div> -->
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  import { useRouter } from "vue-router";
  import confirmDialog from "../util/confirmDialog.vue";
  import deleteicon from "@/assets/delete.svg";
  import deactivate from "@/assets/deactivate.svg";
  import { usepopUpControl } from "@/stores/popUpControl.js";
  const selectedAccounts = ref([]);
  
  // Access the store
  const popUpControl = usepopUpControl();
  

  
  // Search, Filter, and Bulk Actions
  const searchQuery = ref("");
  const bulkActions = ref([
    { name: "Delete" },
    { name: "Block" },
    { name: "Deactivate" },
  ]);
  const selectedBulkAction = ref(null);
  const filterOptions = ref([
    { name: "Level 1" },
    { name: "Level 2" },
    {name:"Level 3"},
    {name:"Level 4"}
  ]);
  const selectedFilter = ref(null);
  

  const UsersKyc= ref([
  {
    name: "Chinelo Eze",
    amount: "₦120,000.00",
    avatar: "https://example.com/avatar1.jpg",
    level: 3,
    dateOfBirth: "15-05-1990",
    phoneNumber: "+2348030000001"
  },
  {
    name: "Adamu Ibrahim",
    amount: "₦85,000.00",
    avatar: "https://example.com/avatar2.jpg",
    level: 2,
    dateOfBirth: "22-11-1985",
    phoneNumber: "+2348030000002"
  },
  {
    name: "Ngozi Udo",
    amount: "₦150,000.00",
    avatar: "https://example.com/avatar3.jpg",
    level: 4,
    dateOfBirth: "07-09-1988",
    phoneNumber: "+2348030000003"
  },
  {
    name: "Tunde Adebayo",
    amount: "₦70,000.00",
    avatar: "https://example.com/avatar4.jpg",
    level: 1,
    dateOfBirth: "18-03-1995",
    phoneNumber: "+2348030000004"
  },
  {
    name: "Mariam Bello",
    amount: "₦110,000.00",
    avatar: "https://example.com/avatar5.jpg",
    level: 2,
    dateOfBirth: "25-12-1993",
    phoneNumber: "+2348030000005"
  },
  {
    name: "Bola Oladele",
    amount: "₦95,000.00",
    avatar: "https://example.com/avatar6.jpg",
    level: 1,
    dateOfBirth: "10-07-1992",
    phoneNumber: "+2348030000006"
  },
  {
    name: "Fatima Ali",
    amount: "₦200,000.00",
    avatar: "https://example.com/avatar7.jpg",
    level: 4,
    dateOfBirth: "20-08-1996",
    phoneNumber: "+2348030000007"
  },
  {
    name: "Kemi Adeyemi",
    amount: "₦125,000.00",
    avatar: "https://example.com/avatar8.jpg",
    level: 3,
    dateOfBirth: "30-01-1991",
    phoneNumber: "+2348030000008"
  },
  {
    name: "Emeka Okoro",
    amount: "₦50,000.00",
    avatar: "https://example.com/avatar9.jpg",
    level: 2,
    dateOfBirth: "14-04-1994",
    phoneNumber: "+2348030000009"
  }
]);

  // Pagination
  const currentPage = ref(1);
  
  // Dynamic filtering of accounts based on search and filter
  const filteredAccounts = computed(() => {
    let result = accounts.value;
  
    if (searchQuery.value) {
      result = result.filter((account) =>
        account.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    }
  
    if (selectedFilter.value) {
      if (selectedFilter.value.name === "Personal Account") {
        result = result.filter((account) => account.accountType.Personal);
      } else if (selectedFilter.value.name === "Business Account") {
        result = result.filter((account) => account.accountType.Business);
      }
    }
  
    return result;
  });
  </script>
  
  <style scoped>
  /* Add any additional Tailwind styling here if needed */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s ease;
  }
  .fade-enter,
  .fade-leave-to {
    transition: opacity 0.4s ease;
    opacity: 0;
  }
  </style>
  