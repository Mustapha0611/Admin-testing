<template>
  <div
    class="flex justify-between items-center p-3 rounded-xl"
    :style="{ backgroundColor: bg, color: textColor }"
  >
    <section class="flex flex-col  gap-1">
      <p class="text-sm font-light">{{ type }}</p>
      <p class="font-semibold">{{ number }}</p>
    </section>
    <section>
      <img :src="img" alt="total pay" class="h-10 w-10" />
    </section>
  </div>
</template>
<script setup>
const props = defineProps({
  number: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
  },
  bg: {
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
