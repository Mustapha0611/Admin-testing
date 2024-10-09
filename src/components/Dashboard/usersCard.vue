<template>
  <div
    class="flex justify-between items-center p-4 rounded-xl"
    :style="{ backgroundColor: bg, color: textColor }"
  >
    <section class="flex flex-col gap-2">
      <p class="text-sm">{{ type }}</p>
      <p>{{ number }}</p>
    </section>
    <section>
      <img :src="img" alt="total pay" class="h-14 w-14" />
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
