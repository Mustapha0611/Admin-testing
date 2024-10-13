<template>
  <div class="p-6 bg-white">
    <!-- Search and Action bar -->
    <section class="flex items-center justify-center py-2 gap-4">
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

    <!-- Data Table -->
    <table class="w-full border-collapse">
  <thead>
    <tr class="bg-main text-white">
      <th class="py-3  w-1"></th> <!-- Placeholder for checkbox column -->
      <th class="py-2 px-4 text-sm font-light text-start">Name</th>
      <th class="py-2 px-4 text-sm font-light text-start">Account Type</th>
      <th class="py-2 px-4 text-sm font-light text-start">Date Created</th>
      <th class="py-2 px-4 text-sm font-light text-start">Status</th>
      <th class="py-2 px-4 text-sm font-light text-start">Amount</th>
      <th class="py-2 px-4 text-sm font-light text-start">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(account, index) in accounts" :key="index" class="border-b border-slate-300 text-sm">
      <!-- Checkbox for each row -->
      <td class="py-4 ">
        <input type="checkbox" v-model="selectedAccounts" :value="account" />
      </td>
      <td class="py-2 px-4">{{ account.name }}</td>
      <td class="py-2 px-4">
        <div class="flex gap-2">
          <span class="border rounded-2xl text-white text-[8px] px-4 py-1 "
          :class="account.accountType.Personal ? 'bg-orange-400':'bg-gray-300'"
          >Personal</span>
          <span  class="border rounded-2xl text-white text-[8px] px-4 py-1 "
          :class="account.accountType.Business ? 'bg-indigo-500':'bg-gray-300'"
          >Business</span>
        </div>
      </td>
      <td class="py-2 px-4">{{ account.dateCreated }}</td>
      <td class="py-2 px-4">{{ account.status }}</td>
      <td class="py-2 px-4">{{ account.amount }}</td>
      <td class="py-2 px-4">
        <!-- Actions (e.g., buttons) can be added here -->
        <button class="text-blue-500 hover:underline">View</button>
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
  </div>
</template>

<script setup>
import checkbox from "@/presets/aura/checkbox";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

// Sample data
const selectedProduct = ref();
const accounts = ref([
  {
    id: 1,
    name: "Faith Ujunwa",
    accountType: { Personal: true, Business: true },
    dateCreated: "10/02/2024",
    status: "Active",
    amount: "₦10,000,000.00",
  },
  {
    id: 2,
    name: "Adamu Musa",
    accountType: { Personal: true, Business: false },
    dateCreated: "10/02/2024",
    status: "Blocked",
    amount: "₦54,040,078,801.00",
  },
  {
    id: 3,
    name: "Sarah Ruth Tobaa",
    accountType: { Personal: true, Business: false },
    dateCreated: "10/02/2024",
    status: "Active",
    amount: "₦64,000,000.45",
  },
  {
    id: 4,
    name: "James Ikeme",
    accountType: { Personal: false, Business: true },
    dateCreated: "11/04/2023",
    status: "Inactive",
    amount: "₦5,250,000.00",
  },
  {
    id: 5,
    name: "Chinelo Chidi",
    accountType: { Personal: true, Business: false },
    dateCreated: "07/20/2023",
    status: "Active",
    amount: "₦850,200.50",
  },
  {
    id: 6,
    name: "Abubakar Yusuf",
    accountType: { Personal: false, Business: true },
    dateCreated: "01/15/2023",
    status: "Blocked",
    amount: "₦40,500,000.00",
  },
  {
    id: 7,
    name: "Miriam Obinna",
    accountType: { Personal: true, Business: true },
    dateCreated: "03/10/2024",
    status: "Active",
    amount: "₦12,700,300.00",
  },
  {
    id: 8,
    name: "Sani Bello",
    accountType: { Personal: false, Business: true },
    dateCreated: "06/08/2023",
    status: "Active",
    amount: "₦33,900,000.99",
  },
  {
    id: 9,
    name: "Ngozi Okechukwu",
    accountType: { Personal: true, Business: false },
    dateCreated: "09/30/2023",
    status: "Inactive",
    amount: "₦1,500,000.75",
  },
  {
    id: 10,
    name: "Tunde Akinola",
    accountType: { Personal: true, Business: false },
    dateCreated: "02/12/2024",
    status: "Active",
    amount: "₦21,000,000.00",
  }
]);


// Search, Filter, and Bulk Actions
const searchQuery = ref("");
const bulkActions = ref([
  { name: "Delete" },
  { name: "Block" },
  { name: "Deactivate" },
]);
const selectedBulkAction = ref(null);
const filterOptions = ref([
  { name: "Personal Account" },
  { name: "Business Account" },
]);
const selectedFilter = ref(null);

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

// Actions template for the "Actions" column
const router = useRouter();
const actionsTemplate = (rowData) => {
  return `
      <Button label="..." icon="pi pi-ellipsis-h" @click="viewDetails(${rowData.id})" />
    `;
};

// Navigate to the user's detail page dynamically
const viewDetails = (id) => {
  router.push(`/users/${id}`);
};

// Placeholder for updating and deleting users
const updateUser = (rowData) => {
  alert(`Update user: ${rowData.name}`);
};
const deleteUser = (rowData) => {
  alert(`Delete user: ${rowData.name}`);
};

// Account Type Template
const accountTypeTemplate = ({ accountType }) => {
  return `
      <div>
        <span class="${
          accountType.Personal ? "text-black" : "text-gray-400"
        }">Personal</span> | 
        <span class="${
          accountType.Business ? "text-black" : "text-gray-400"
        }">Business</span>
      </div>
    `;
};
</script>

<style scoped>
/* Add any additional Tailwind styling here if needed */
</style>
