<template>
    <div
      class="fixed top-0 z-50 left-0 w-full h-[100dvh] flex items-center justify-center bg-black/10"
    >
      <section
        class="h-80 w-96 rounded-3xl flex flex-col items-center justify-center bg-white p-4"
      >
        <div>
          <img :src="img" alt="Image" />
        </div>
        <h1 class="text-xl font-semibold my-4">{{ title }}</h1>
        <p class="text-center text-sm">
          {{ message }}
        </p>
        <div class="flex gap-10 mt-6">
          <button
            class="border border-main px-8 py-2 rounded-3xl text-sm"
            @click="onCancel"
          >
            Cancel
          </button>
          <button
            class="border border-main px-8 py-2 rounded-3xl text-sm bg-main text-white"
            v-if="button === 'Delete'"
            @click="onConfirm"
          >
            {{ button }}
          </button>
          <button
            class="border border-main px-8 py-2 rounded-3xl text-sm bg-main text-white"
            v-if="button === 'Deactivate'"
            @click="onConfirm"
          >
            {{ button }}
          </button>
          <button
            class="border border-main px-8 py-2 rounded-3xl text-sm bg-main text-white"
            v-if="button === 'Block'"
            @click="onConfirm"
          >
            {{ button }}
          </button>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    title: String,
    img: String,
    button: String,
    message: String,
  });
  
  const emit = defineEmits(["confirm", "cancel"]);
  
  const onConfirm = () => {
    emit("confirm");
  };
  
  const onCancel = () => {
    emit("cancel");
  };
  </script>
  