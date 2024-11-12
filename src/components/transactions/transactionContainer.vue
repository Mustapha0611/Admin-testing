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
      <thead>
        <tr class="bg-main text-white">
          <th class="py-4 w-1"></th>
          <!-- Placeholder for checkbox column -->
          <th class="py-4 px-4 text-sm font-light text-start">Name</th>
          <th class="py-4 px-4 text-sm font-light text-start">Account Type</th>
          <th class="py-4 px-4 text-sm font-light text-start">Date Created</th>
          <th class="py-4 px-4 text-sm font-light text-start">Status</th>
          <th class="py-4 px-4 text-sm font-light text-start">Amount</th>
          <th class="py-4 px-4 text-sm font-light text-start">Actions</th>
        </tr>
      </thead>
      <tbody>
        
        <tr
          v-for="(account, index) in filteredTransactions"
          :key="index"
          class="border-b border-slate-300 text-sm"
        >
          <!-- Checkbox for each row -->
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
              :class="
                account.accountType.Personal ? 'bg-orange-400' : 'bg-gray-300'
              "
              >Personal</span
            >
            <span
              class="rounded-2xl text-white text-[8px] px-2 py-1 ml-3"
              :class="
                account.accountType.Business ? 'bg-indigo-500' : 'bg-gray-300'
              "
              >Business</span
            >
          </td>
          <td class="py-2 px-4">{{ account.dateCreated }}</td>
          <td class="py-2 px-4 text-white">
            <span
              class="px-3 rounded-2xl py-1 text-[8px]"
              :class="{
                ' bg-green-600': account.status === 'Active',
                'bg-yellow-600': account.status === 'Inactive',
                'bg-red-600': account.status === 'Blocked',
              }"
              >{{ account.status }}</span
            >
          </td>
          <td class="py-2 px-4">{{ account.amount }}</td>
          <td class="px-4 relative">
            <!-- Actions (e.g., buttons) can be added here -->
            <button
              @click="toggleMenu(index)"
              aria-haspopup="true"
              aria-controls="overlay_menu"
              class="text-main text-[6px] text-center border rounded-md w-14 h-8 flex items-center justify-center gap-0.5"
            >
              <i class="pi pi-circle-fill"></i> <i class="pi pi-circle-fill"></i
              ><i class="pi pi-circle-fill"></i>
            </button>
            <transition name="fade">
              <ul
                v-if="isMenuOpen(index)"
                class="absolute mt-2 z-30 right-10 bg-gray-50 border rounded shadow-lg w-40"
              >
                <li class="p-3 cursor-pointer font-semibold">Quick Actions</li>
                <li
                  class="hover:bg-gray-200 px-2 py-2 cursor-pointer mt-1"
                  @click="popUpControl.promptDelete"
                >
                  Delete
                </li>
                <li
                  class="hover:bg-gray-200 px-2 py-2 cursor-pointer mt-1"
                  @click="popUpControl.promptBlock"
                >
                  Block
                </li>
                <li
                  class="hover:bg-gray-200 px-2 py-2 cursor-pointer mt-1"
                  @click="popUpControl.promptDeactivate"
                >
                  Deactivate
                </li>
                <li class="hover:bg-gray-200 px-2 py-2 cursor-pointer mt-1">
                  <router-link to="/user-details"> Details</router-link>
                </li>
              </ul>
            </transition>
          </td>
        </tr>
        <transition-group name="fade">
          <confirmDialog
            v-if="popUpControl.showDeletePopUp"
            :img="deleteicon"
            title="Notice"
            message="Click 'Delete' to permanently remove this user. If you're unsure, click 'Cancel' to stop this action."
            @confirm="confirmDelete"
            @cancel="popUpControl.cancelDelete"
            button="Delete"
          />

          <confirmDialog
            v-if="popUpControl.showBlockPopup"
            :img="deactivate"
            title="Notice"
            message="Click 'Block' to deny this user access to perform any transaction in WeQuickPay. If you're unsure, click 'Cancel' to stop this action."
            @confirm="confirmBlock"
            @cancel="popUpControl.cancelDelete"
            button="Block"
          />

          <confirmDialog
            v-if="popUpControl.showDeactivatePopUp"
            :img="deactivate"
            title="Notice"
            message="Click 'Deactivate' to temporarily suspend this user's access to WeQuickPay. If you're uncertain, click 'Cancel' to abort this action."
            @confirm="confirmDeactivate"
            @cancel="popUpControl.cancelDelete"
            button="Deactivate"
          />
        </transition-group>
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
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import confirmDialog from "@/components/users/confirmDialog.vue";
import deleteicon from "@/assets/delete.svg";
import deactivate from "@/assets/deactivate.svg";
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
   result.sort((a, b) => new Date(a.dateCreated) - new Date(b.dateCreated));
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
