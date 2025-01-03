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
    <table class="w-full border-collapse mt-4">
    
       
            <tbody class="w-full">
                
        <tr class="bg-main text-white w-full">
          <th class="py-4 w-1"></th>
          <!-- Placeholder for checkbox column -->
          <th class="py-4 px-4 text-sm font-light text-start">Name</th>
          <th class="py-4 px-4 text-sm font-light text-start">Account Type</th>
          <th class="py-4 px-4 text-sm font-light text-start">Transfer Time</th>
          <th class="py-4 px-4 text-sm font-light text-start">Status</th>
          <th class="py-4 px-4 text-sm font-light text-start">Amount</th>
          <th class="py-4 px-4 text-sm font-light text-start">Actions</th>
        </tr>
  <template v-for="(account, index) in filteredTransactions" :key="index">
    <!-- Date Header Row -->
    <tr v-if="isNewDate(account.dateCreated, index)" >
      <td colspan="10" class="  pt-6 font-semibold text-gray-900">
        {{ getDateLabel(account.dateCreated) }}
      </td>
    </tr>

    <!-- Transaction Row -->
    <tr class="border-b border-slate-300 text-sm">
      <td class="py-4">
        <input
          type="checkbox"
          v-model="selectedAccounts"
          :value="account"
          class="h-4 aspect-square accent-indigo-800"
        />
      </td>
      <td class="py-6 px-4">{{ account.name }}</td>
      <td class="py-6 px-4">
        <span
          class="rounded-2xl text-white text-[8px] px-2 py-1"
          :class="account.accountType.Personal ? 'bg-orange-400' : 'bg-gray-300'"
        >
          Personal
        </span>
        <span
          class="rounded-2xl text-white text-[8px] px-2 py-1 ml-3"
          :class="account.accountType.Business ? 'bg-indigo-500' : 'bg-gray-300'"
        >
          Business
        </span>
      </td>
      <td class="py-2 px-4">{{ account.timeCreated }}</td>
      <td class="py-2 px-4 text-white">
        <span
          class="px-3 rounded-2xl py-1 text-[8px]"
          :class="{
            'bg-green-600': account.status === 'Active',
            'bg-yellow-600': account.status === 'Inactive',
            'bg-red-600': account.status === 'Blocked',
          }"
        >
          {{ account.status }}
        </span>
      </td>
      <td class="py-2 px-4">{{ account.amount }}</td>
      <td class="px-4 relative">
        <button
          @click="toggleMenu(index)"
          aria-haspopup="true"
          aria-controls="overlay_menu"
          class="text-main text-[6px] text-center border rounded-md w-14 h-8 flex items-center justify-center gap-0.5"
        >
          <i class="pi pi-circle-fill"></i> <i class="pi pi-circle-fill"></i><i class="pi pi-circle-fill"></i>
        </button>
        <!-- Action Menu -->
        <transition name="fade">
          <ul
            v-if="isMenuOpen(index)"
            class="absolute mt-2 z-30 right-10 bg-gray-50 border rounded shadow-lg w-40"
          >
            <li class="p-3 cursor-pointer font-semibold">Quick Actions</li>
            <li tabindex="0" class="hover:bg-gray-200/50 text-gray-500 px-2 py-2 cursor-pointer mt-1" @click="popUpControl.promptReverse">Reverse</li>
            <li tabindex="0" class="hover:bg-gray-200/50 text-gray-500 px-2 py-2 cursor-pointer mt-1" @click="popUpControl.promptRefund">Refund</li>
            <li tabindex="0" class="hover:bg-gray-200/50 text-gray-500 px-2 py-2 cursor-pointer mt-1" @click="popUpControl.promptCancel">Cancel</li>
            <li tabindex="0" class="hover:bg-gray-200/50 text-gray-500 px-2 py-2 cursor-pointer mt-1"><router-link to="/transaction-details"> details</router-link></li>
          </ul>
        </transition>
      </td>
    </tr>
  </template>
</tbody>

            
      
        <transition-group name="fade">
          <confirmDialog
            v-if="popUpControl.showReversePopUp"
            :img="reverse"
            title="Reverse Transaction"
            message="Click 'Reverse' to reverse this transaction. If you're unsure, click 'Cancel' to stop this action."
            @confirm="confirmDelete"
            @cancel="popUpControl.cancelDelete"
            button="Reverse"
          />

          <confirmDialog
            v-if="popUpControl.showRefundPopUp"
            :img="refund"
            title="Refund Transaction"
            message="Click 'Refund' to refund this transaction. If you're unsure, click 'Cancel' to stop this action."
            @confirm="confirmBlock"
            @cancel="popUpControl.cancelDelete"
            button="Refund"
          />

          <confirmDialog
            v-if="popUpControl.showCancelPopUp"
            :img="cancelation"
            title="Cancel Transaction"
            message="Click 'Cancel' to discontinue this transaction. If you're unsure, click 'Not sure' to stop this action."
            @confirm="confirmDeactivate"
            @cancel="popUpControl.cancelDelete"
            button="Cancel"
          />
        </transition-group>
      
    </table>

    <!-- Pagination -->
    <!-- <div class="flex justify-center mt-4">
          <Pagination
            v-mode:page="currentPage"
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
import confirmDialog from "@/components/util/confirmDialog.vue";
import reverse from "@/assets/reverse.png";
import refund from "@/assets/refund.png";
import cancelation from "@/assets/cancelation.png";

import { usepopUpControl } from "@/stores/popUpControl.js";
const selectedAccounts = ref([]);

// Access the store
const popUpControl = usepopUpControl();

const confirmBlock = () => {
  // Logic to block the account
  console.log("Account blocked");
  popUpControl.showBlockPopup = false;
};

const confirmDeactivate = () => {
  // Logic to deactivate the account
  console.log("Account deactivated");
};

// Function to confirm deletion
const confirmDelete = async () => {
  //   try {
  //     const response = await axios.delete(
  //       `https://api.example.com/accounts/${selectedAccount.value.id}`
  //     );
  //     if (response.status === 200) {
  //       // Remove the account from the list after successful deletion
  //       accounts.value = accounts.value.filter(
  //         (account) => account.id !== selectedAccount.value.id
  //       );
  //       console.log("Account deleted successfully");
  //     }
  //   } catch (error) {
  //     console.error("Error deleting account:", error);
  //   } finally {
  //     // Close the modal and clear the selected account
  //     popUpControl.showDeactivatePopUp = false;
  //   }
  console.log("deleteed");
};

// Function to cancel deletion

const Transactions = ref([
  {
    id: 1,
    name: "Faith Ujunwa",
    accountType: { Personal: true, Business: true },
    dateCreated: "10/02/2024",
    timeCreated: "04:54 AM",
    status: "Active",
    amount: "₦10,000,000.00",
  },
  {
    id: 2,
    name: "Adamu Musa",
    accountType: { Personal: true, Business: false },
    dateCreated: "10/02/2024",
    timeCreated: "08:22 PM",
    status: "Blocked",
    amount: "₦54,040,078,801.00",
  },
  {
    id: 3,
    name: "Sarah Ruth Tobaa",
    accountType: { Personal: true, Business: false },
    dateCreated: "10/02/2024",
    timeCreated: "06:01 PM",
    status: "Active",
    amount: "₦64,000,000.45",
  },
  {
    id: 4,
    name: "James Ikeme",
    accountType: { Personal: false, Business: true },
    dateCreated: "11/04/2023",
    timeCreated: "09:15 AM",
    status: "Inactive",
    amount: "₦5,250,000.00",
  },
  {
    id: 5,
    name: "Chinelo Chidi",
    accountType: { Personal: true, Business: false },
    dateCreated: "07/20/2023",
    timeCreated: "11:45 AM",
    status: "Active",
    amount: "₦850,200.50",
  },
  {
    id: 6,
    name: "Abubakar Yusuf",
    accountType: { Personal: false, Business: true },
    dateCreated: "01/15/2023",
    timeCreated: "02:30 PM",
    status: "Blocked",
    amount: "₦40,500,000.00",
  },
  {
    id: 7,
    name: "Miriam Obinna",
    accountType: { Personal: true, Business: true },
    dateCreated: "03/10/2024",
    timeCreated: "10:40 AM",
    status: "Active",
    amount: "₦12,700,300.00",
  },
  {
    id: 8,
    name: "Sani Bello",
    accountType: { Personal: false, Business: true },
    dateCreated: "06/08/2023",
    timeCreated: "04:18 PM",
    status: "Active",
    amount: "₦33,900,000.99",
  },
  {
    id: 9,
    name: "Ngozi Okechukwu",
    accountType: { Personal: true, Business: false },
    dateCreated: "09/30/2023",
    timeCreated: "07:25 PM",
    status: "Inactive",
    amount: "₦1,500,000.75",
  },
  {
    id: 10,
    name: "Tunde Akinola",
    accountType: { Personal: true, Business: false },
    dateCreated: "02/12/2024",
    timeCreated: "12:00 PM",
    status: "Active",
    amount: "₦21,000,000.00",
  },
]);

// Manage the index of the open menu
const openMenuIndex = ref(null);

// Toggle the menu for the clicked item
const toggleMenu = (index) => {
  openMenuIndex.value = openMenuIndex.value === index ? null : index;
};

// Check if a menu is open
const isMenuOpen = (index) => openMenuIndex.value === index;

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
const filteredTransactions = computed(() => {
  // Filter transactions by search query and filter option
  let result = Transactions.value;

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
   // Sort by date descending
   result.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));
  return result;
});

const isNewDate = (date, index) => {
  // Check if the current date is different from the previous item’s date
  return index === 0 || filteredTransactions.value[index - 1].dateCreated !== date;
};

const getDateLabel = (date) => {
  const today = new Date().toISOString().split("T")[0];
  return date === today ? "Today" : formatDate(date);
};

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
};

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
