<template>
  <div class="flex gap-2">
    <section class="w-[75%] bg-white rounded-lg p-4">
      <aside class="text-['#05004E']">
        <h2 class="font-semibold text-base">Transaction</h2>
        <p class="font-light text-xs">Transaction insight</p>
      </aside>
      <div class="grid grid-cols-5 pt-6 mt-6 gap-2">
        <TransactionCard
          textColor="#C9002C"
          bgColor="#FFC5CB"
          type="Number of"
          :img="alltrans"
          number="11"
        />
        <TransactionCard
          textColor="#1D33F8"
          bgColor="#D9DDFF"
          type="Number of Pending"
          :img="pending"
          number="300"
        />
        <TransactionCard
          textColor="#15B26E"
          bgColor="#E8FFF5"
          type="Number of Sucessful"
          :img="success"
          number="4"
        />
        <TransactionCard
          textColor="#0182BB"
          bgColor="#E8F8FF"
          type="Total number of "
          :img="total"
          number="5"
        />
        <TransactionCard
          textColor="#FF6600"
          bgColor="#FFE3D1"
          type="Number of Scheduled"
          :img="scheduled"
          number="6"
        />
      </div>
    </section>

    <!-- details -->
    <section class="w-[25%] grid grid-cols-2 gap-x-2 gap-y-4 rounded-lg">
      <div class="rounded-lg bg-white py-3 px-2">
        <p class="text-[10px]">Blocked/Suspicious Accounts</p>
        <span class="font-semibold text-base inline-block py-1">53</span>
        <img src="@/assets/blocked.svg" alt="active" class="w-8 h-8" />
      </div>
      <div class="rounded-lg bg-white py-3 px-2">
        <p class="text-[10px]">Average Ticket Resolution Time</p>
        <span class="font-semibold text-base inline-block py-1">2m 55s</span>
        <img src="@/assets/active.svg" alt="active" class="w-8 h-8" />
      </div>

      <!-- Charts -->
      <div class="rounded-lg bg-white py-3 px-2">
        <p class="text-[10px]">Average Ticket Resolution Time</p>
        <span class="font-semibold text-base inline-block py-1">24%</span>
        <Chart
          type="line"
          :data="userAccessData"
          :options="chartOptions"
          class="h-10"
        />
      </div>
      <div class="rounded-lg bg-white py-3 px-2">
        <p class="text-[10px]">Average Ticket Resolution Time</p>
        <span class="font-semibold text-base inline-block py-1">30%</span>
        <Chart
          type="line"
          :data="supportTeamData"
          :options="chartOptions"
          class="h-10"
        />
      </div>
    </section>
  </div>
</template>
<script setup>
import TransactionCard from "./TransactionCard.vue";
import alltrans from "@/assets/alltrans.svg";
import pending from "@/assets/pending.svg";
import success from "@/assets/success.svg";
import total from "@/assets/total.svg";
import scheduled from "@/assets/scheduled.svg";
import { ref } from "vue";
import Chart from "primevue/chart";

const userAccessData = ref({
  labels: ["", "", "", "", "", ""],
  datasets: [
  {
      label: 'User Access Logs',
      data: [5, 10, 15, 10, 15, 20],
      borderColor: '#3b82f6', // Line color
      backgroundColor: 'rgba(59, 130, 246, 0)', // Transparent background for the line dataset
      fill: false, // No fill for the line dataset
      tension: 0.4,
      pointRadius: 0, // Remove the dots
    },
    {
      label: 'Background Area', // Background dataset
      // Set this data to be slightly lower than the line dataset to create the margin
      data: [4, 9, 14, 9, 14, 19], // These values create the gap
      backgroundColor: 'rgba(59, 130, 246, 0.2)', // Background color under the line
      borderColor: 'transparent', // No border
      fill: true, // Enable area filling
      pointRadius:0,
      tension: 0.4,
    }
  ],
});
const supportTeamData = ref({
  labels: ["", "", "", "", "", ""],
  datasets: [
    {
      label: "Support Team Performance",
      data: [10, 14, 12, 15, 16, 14],
      borderColor: "#3b82f6",
      backgroundColor: 'rgba(59, 130, 246, 0.2)', // Background color under the line
      
      fill: true, // Enable area filling
      pointRadius:0,
      tension: 0.4,
    },
  ],
});

const chartOptions = ref({
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  datalabels: {
      display: false, // If you're using the Chart.js Data Labels plugin
    },
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
    tooltip: {
      enabled: false, // Hides tooltips (data labels)
    },
    
  },
  maintainAspectRatio: false,
});
</script>
