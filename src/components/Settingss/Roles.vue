<template>
  <div class="p-6 bg-white my-10">
    <!-- Search and Action bar -->
    <section class="flex items-center justify-center py-2 gap-4 ">
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

          <th class="py-4 px-4 text-sm font-light text-start">Role</th>
          <th class="py-4 px-4 text-sm font-light text-start">Permission</th>
          <th class="py-4 px-4 text-sm font-light text-start">Date Created</th>

          <th class="py-4 px-4 text-sm font-light text-start">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(account, index) in filteredAccounts"
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

          <td class="py-6 px-4">
            {{ account.RoleType }}
          </td>
          <td class="py-2 px-4  items-center">
            <span v-for="per in account.Permission" class="mr-3 text-xs text-white px-3 py-1.5 rounded-3xl"
            :class="{
                'bg-orange-600': per ==='Read',
                'bg-green-500':per ==='Write',
                'bg-red-600': per ==='Delete',
                'bg-blue-500': per ==='Update'
            }"
            >
                {{ per }}
            </span>
        </td>
          <td class="py-2 px-4">{{ account.dateCreated }}</td>

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
                class="absolute z-30 right-20 bg-gray-50 border rounded shadow-lg w-40"
              >
                <li class="p-3 cursor-pointer font-semibold">Quick Actions</li>
                <li
                  class="hover:bg-blue-100/70 px-2 py-2 cursor-pointer mt-1"
                  @click="popUpControl.promptDelete"
                >
                  Edit
                </li>
                <li
                  class="hover:bg-blue-100/70 px-2 py-2 cursor-pointer mt-1"
                  @click="popUpControl.promptDelete"
                >
                  Delete
                </li>
             
              </ul>
            </transition>
          </td>
        </tr>
        <transition-group name="fade">
          <confirmDialog
            v-if="popUpControl.showDeletePopUp"
            :img="deleteicon"
            title="Delete Role"
            message="Click 'Delete' to continue witih this process. If you're unsure, click 'Cancel' to stop this action."
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
//   import { useRouter } from "vue-router";
import confirmDialog from "@/components/util/confirmDialog.vue";
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

const accounts = ref([
  {
    id: 1,
    RoleType: 'Subscribers',
    dateCreated: "10/02/2024",
    amount: "₦10,000,000.00",
    Permission: ["Read"], // Subscribers can only Read
  },
  {
    id: 2,
    RoleType: 'Agents',
    dateCreated: "10/02/2024",
    amount: "₦54,040,078,801.00",
    Permission: ["Read", "Write"], // Agents can Read and Write
  },
  {
    id: 3,
    RoleType: 'Admins',
    dateCreated: "10/02/2024",
    amount: "₦64,000,000.45",
    Permission: ["Write", "Read", "Update", "Delete"], // Admins have full permissions
  },
  {
    id: 4,
    RoleType: 'Editors',
    dateCreated: "11/04/2023",
    amount: "₦5,250,000.00",
    Permission: [ "Write", "Update", "Read"], // Editors can read, write, and update
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
]);
const selectedBulkAction = ref(null);
const filterOptions = ref([{name:'Select an Option'},{ name: "Subscribers" }, {name:'Agents'},{ name: "Admins" },{name:'Editors'}]);
const selectedFilter = ref(null);

// Pagination
const currentPage = ref(1);

// Dynamic filtering of accounts based on search and filter
const filteredAccounts = computed(() => {
  let result = accounts.value;

  if (searchQuery.value) {
    result = result.filter((account) =>
      account.RoleType.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  if (selectedFilter.value) {
    if (selectedFilter.value.name === "Admins") {
      result = result.filter((account) => account.RoleType === "Admins");
    } else if (selectedFilter.value.name === "Subscribers") {
      result = result.filter((account) => account.RoleType === "Subscribers");
    }
    else if (selectedFilter.value.name === "Agents") {
      result = result.filter((account) => account.RoleType === "Agents");
    }
    else if (selectedFilter.value.name === "Editors") {
      result = result.filter((account) => account.RoleType === "Editors");
    }else{
        return result
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
