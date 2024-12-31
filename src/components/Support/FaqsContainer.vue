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
    <section class="py-5">
        <div v-for="(faq,index) of faqs" :key="faq.id" class="flex items-center gap-2 py-4 border-b-2">
            <span class="self-start mt-1"> <input type="checkbox" name="" id="" class="w-5 h-5 accent-main"></span>
            <aside class="w-[90%]">
            
                <h1 class="text-xl flex gap-2">
                   
                    {{ faq.title }}
                </h1>
                <p class="text-gray-500 py-0.5">{{ faq.category }}</p>
                <p>{{ faq.answer }}</p>
            </aside>
            <div class="px-4 relative">
        <!-- Actions (e.g., buttons) can be added here -->
        <button
          @click="toggleMenu(index)"
          aria-haspopup="true"
          aria-controls="overlay_menu"
          class="text-main text-[6px] text-center rounded-md w-8 h-8 flex items-center flex-col justify-center gap-0.5"
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
              Update
            </li>
           
          </ul>
        </transition>
      </div>
        </div>
     
    </section>
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
import Faqs from "@/views/Faqs.vue";

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

// Function to cancel deletion

const faqs = ref([
  {
    id: 1,
    title: "How to sign up for an account?",
    category: "Account Setup",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at mauris vel nisl aliquam tristique.",
  },
  {
    id: 2,
    title: "What is the refund policy?",
    category: "Payments",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula elit et lorem interdum laoreet.",
  },
  {
    id: 3,
    title: "How can I reset my password?",
    category: "Account Management",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat sapien ac lorem aliquet volutpat.",
  },
  {
    id: 4,
    title: "Can I upgrade my plan?",
    category: "Subscriptions",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a arcu id libero tristique malesuada.",
  },
  {
    id: 5,
    title: "What is the cancellation policy?",
    category: "Subscriptions",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id nisl nec erat laoreet accumsan.",
  },
  {
    id: 6,
    title: "How can I contact customer support?",
    category: "Support",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla justo et lorem posuere, non feugiat elit mattis.",
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
  { name: "Disable" },
  
]);
const selectedBulkAction = ref(null);
const filterOptions = ref([
    {name:'Select an Option'},
  { name: "Category" },
  { name: "Ascending" },
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
