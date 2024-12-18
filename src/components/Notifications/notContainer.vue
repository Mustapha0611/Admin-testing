<template>
  <div class="">
    <!-- Search and Action bar -->
    <section class="flex items-center justify-center py-10 gap-4 p-6 bg-white rounded-lg">
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
    <section class="bg-white my-6 p-4 rounded-lg">
        <div class="flex justify-between pb-6 pt-4">
            <span class="font-semibold">All Notifications</span>
            <span 
             class="flex items-center justify-center bg-main font-semibold text-white rounded-full text-xs px-2 py-1.5"
            >{{ Transactions.length }}</span>
        </div>
        <div class="flex  flex-col h-screen overflow-y-scroll">
            <section v-for="transaction of filteredTransactions" :key="transaction.id" class="border-t-2 flex flex-col justify-center py-5">
                <aside class="flex justify-between">
                    <span>{{ transaction.title }}</span>
                    <span class="text-xs font-light text-slate-500">{{ transaction.time }}</span>
                </aside>
                <p class="text-sm pt-1">{{ transaction.message }}</p>
            </section>
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

import { usepopUpControl } from "@/stores/popUpControl.js";
const selectedAccounts = ref([]);
const router = useRouter();
// Access the store
const popUpControl = usepopUpControl();

// Search, Filter, and Bulk Actions
const searchQuery = ref("");
const bulkActions = ref([
    {name:'Select Action'},
    { name: "Mark as read" },
    { name: "Mark as unread" }
]);
const selectedBulkAction = ref(null);
const filterOptions = ref([
  { name: "Select an Option" },
  { name: "Category" },
  { name: "Read" },
  { name: "Unread" },
]);
const selectedFilter = ref(null);

const Transactions = ref([
  {
    id: 1,
    title: "Payment Received",
    message: "You received $500 from Alex Johnson.",
    type: "credit", // credit or debit
    isRead: false,
    time: "09:30 AM",
  },
  {
    id: 2,
    title: "Bill Payment",
    message: "Your electricity bill of $120 has been paid.",
    type: "debit",
    isRead: false,
    time: "10:15 AM",
  },
  {
    id: 3,
    title: "Refund Processed",
    message: "A refund of $50 has been credited to your account.",
    type: "credit",
    isRead: true,
    time: "11:45 AM",
  },
  {
    id: 4,
    title: "Subscription Renewal",
    message: "Your Netflix subscription renewal of $15 is successful.",
    type: "debit",
    isRead: false,
    time: "01:20 PM",
  },
  {
    id: 5,
    title: "Loan EMI Deducted",
    message: "Your monthly EMI of $300 has been deducted.",
    type: "debit",
    isRead: true,
    time: "02:30 PM",
  },
  {
    id: 6,
    title: "Salary Credited",
    message: "Your salary of $2,500 has been credited.",
    type: "credit",
    isRead: false,
    time: "08:00 AM",
  },
  {
    id: 7,
    title: "Investment Alert",
    message: "Your $200 investment in Mutual Fund A is complete.",
    type: "debit",
    isRead: true,
    time: "03:15 PM",
  },
  {
    id: 8,
    title: "Card Payment",
    message: "You spent $85 at ABC Store using your Visa card.",
    type: "debit",
    isRead: false,
    time: "05:45 PM",
  },
  {
    id: 9,
    title: "Deposit Confirmed",
    message: "A deposit of $1,000 has been added to your savings account.",
    type: "credit",
    isRead: true,
    time: "07:00 AM",
  },
  {
    id: 10,
    title: "Transaction Alert",
    message: "You transferred $250 to Sarah Carter.",
    type: "debit",
    isRead: false,
    time: "06:15 PM",
  },
  {
    id: 11,
    title: "Credit Card Bill Due",
    message: "Your credit card bill of $450 is due in 2 days.",
    type: "alert",
    isRead: false,
    time: "08:30 PM",
  },
  {
    id: 12,
    title: "Account Limit Reached",
    message: "Your account balance is nearing the minimum limit.",
    type: "alert",
    isRead: true,
    time: "09:45 AM",
  },
  {
    id: 13,
    title: "Failed Transaction",
    message: "Your transaction of $500 to XYZ failed due to insufficient funds.",
    type: "error",
    isRead: false,
    time: "04:20 PM",
  },
  {
    id: 14,
    title: "Reward Earned",
    message: "You earned $10 cashback for using your credit card.",
    type: "credit",
    isRead: true,
    time: "12:15 PM",
  },
  {
    id: 15,
    title: "Security Alert",
    message: "A login attempt from a new device was detected.",
    type: "alert",
    isRead: false,
    time: "03:00 PM",
  },
]);



// Pagination
const currentPage = ref(1);

// Dynamic filtering of accounts based on search and filter
const filteredTransactions = computed(() => {
  let result = Transactions.value;

  if (searchQuery.value) {
    result = result.filter((account) =>
      account.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  if (selectedFilter.value) {
    if (selectedFilter.value.name === "Read") {
      result = result.filter((trx) => trx.isRead === true );
    } else if (selectedFilter.value.name === "Unread") {
      result = result.filter((trx) => trx.isRead !== true );
    } else {
      return result;
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

.custom-checkbox {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #ffffff; /* Tailwind's bg-gray-200 */
  border-radius: 9999px; /* Tailwind's rounded-full */
  border: 1px solid #b8b8b8; /* Tailwind's border-gray-300 */
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s, border-color 0.2s;
}
.custom-checkbox:checked {
  background-color: #031942; /* Tailwind's bg-blue-500 */
  /* Tailwind's border-blue-500 */
}
.custom-checkbox:checked::after {
  content: "";
  position: absolute;
  top: 0.2rem;
  left: 10%;
  width: 1rem;
  height: 1rem;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white"><path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L7 12.586 4.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l9-9a1 1 0 000-1.414z" clip-rule="evenodd" /></svg>');
  background-size: cover;
}
</style>
