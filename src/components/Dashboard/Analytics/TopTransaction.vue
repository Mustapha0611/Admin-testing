<template>
  <div class=" flex-1 p-4 bg-white rounded-lg shadow-md">
    <div class="flex justify-start flex-col  gap-2 mb-4">
      <h2 class="text-xl font-bold">Top Transactions</h2>
      <a href="#" class="text-slate-400 ml-auto hover:underline text-xs"
        >View all</a
      >
    </div>
    <div
      v-for="transaction in transactions"
      :key="transaction.id"
      class="flex items-center mb-4"
    >
      <img
        :src="transaction.image"
        alt="Profile Picture"
        class="w-12 h-12 rounded-full mr-4"
      />
      <div class="flex-1 border-b-2 border-slate-400 pb-1 ">
        <p class="font-semibold">{{ transaction.name }}</p>
        <div class="flex justify-between items-end gap-2">
          <p
            :class="transaction.amount >= 0 ? 'text-green-500' : 'text-red-500'"
            class="text-sm"
          >
            {{ formatCurrency(transaction.amount) }}
          </p>

          <div class="text-gray-500 text-xs">{{ transaction.time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import thomas from "@/assets/thomas.png";
// Data for transactions
const transactions = ref([
  { id: 1, name: "Ada Peters", amount: 5600.0, time: "10:23AM", image: thomas },
  {
    id: 2,
    name: "Ali Akambi",
    amount: 4789600.25,
    time: "05:02PM",
    image: thomas,
  },
  {
    id: 3,
    name: "Linda Adams",
    amount: -507200.0,
    time: "08:55PM",
    image: thomas,
  },
  {
    id: 4,
    name: "Ali Akambi",
    amount: 802600255.23,
    time: "10:15AM",
    image: thomas,
  },
]);

// Currency formatter function
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount);
};
</script>

<style scoped>
/* Add any additional custom styles if needed */
</style>
