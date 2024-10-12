<template>
    <div
      class="flex flex-col gap-2 px-2 py-4 border rounded-md"
      :style="{ backgroundColor: bgColor }"
    >
     
      <section>
        <img :src="img" :alt="img" class="h-8 w-8" />
      </section>
      <section class="flex flex-col gap-2">
        <p class="font-semibold">{{ number }}</p>
        <p class="text-[10px]" :style="{ color: textColor}">{{type}}</p>
        <p class="text-sm font-semibold">Transaction</p>
        
      </section>
    </div>
  </template>
  <script setup>
  const props = defineProps({
    number: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
    bgColor: {
      type: String,
    },
    textColor: {
      type: String,
    },
    img: {
      type: String,
    },
  });
  </script>
  