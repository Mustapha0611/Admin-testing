<template>
  <div class="flex-1 p-4 bg-white rounded-lg shadow-md">
    <div class="flex justify-start flex-col gap-2 mb-4">
      <h2 class="text-xl font-bold">Support Tickets</h2>
      <a href="#" class="text-slate-400 ml-auto hover:underline text-xs"
        >View all</a
      >
    </div>
    <div
      v-for="ticket in tickets"
      :key="ticket.id"
      class="flex items-center mb-4"
    >
      <img
        :src="ticket.image"
        alt="Profile Picture"
        class="w-12 h-12 rounded-full mr-4"
      />
      <div
        class="flex-1 border-b-2 border-slate-400 pb-1"
        :class="{ 'last:border-0': false }"
      >
        <p class="font-semibold">{{ ticket.name }}</p>
        <section class="flex justify-between items-end gap-2">
          <p
            class="text-xs"
            :class="
              ticket.status === 'close' ? 'text-green-500' : 'text-red-500'
            "
          >
            {{ ticket.status }}
          </p>

          <div class="text-gray-500 text-[10px]">{{ ticket.time }}</div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import thomas from "@/assets/Thomas.png";

const tickets = ref([
  { id: 1, name: "Ada Peters", status: "pending", time: "10:23AM", image:thomas },
  {
    id: 2,
    name: "Ali Akambi",
    status: "open",
    time: "05:02PM",
    image: thomas,
  },
  {
    id: 3,
    name: "Linda Adams",
    status: "open",
    time: "08:55PM",
    image: thomas,
  },
  {
    id: 4,
    name: "Ali Akambi",
    status: "close",
    time: "10:15AM",
    image: thomas,
  },
]);
</script>

<style scoped>


</style>
