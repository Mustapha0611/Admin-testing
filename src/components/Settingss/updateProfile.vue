<template>
  <div class="fixed bg-black/50 top-0 flex justify-center right-0 min-h-[100vh] overflow-visible w-full">
    <div class=" w-[70%] bg-white rounded-lg my-3 p-5">
      <section class="flex items-center mt-4">
        <span class="flex-1 text-xs">First Name</span>
        <input type="text" class="px-5 py-2.5 flex-1 text-xs border rounded-3xl" placeholder="Faith">
      </section>
      <section class="flex items-center mt-4">
        <span class="flex-1 text-xs">Last Name</span>
        <input type="text" class="px-5 py-2.5 flex-1 text-xs border rounded-3xl" placeholder="Ozor">
      </section>
      <section class="flex items-center mt-4">
        <span class="flex-1 text-xs">Email</span>
        <input type="text" class="px-5 py-2.5 flex-1 text-xs border rounded-3xl" placeholder="Faith@gmail.com"
          >
      </section>
      <section class="flex items-center mt-4">
        <span class="flex-1 text-xs">Username</span>
        <input type="text" class="px-5 py-2.5 flex-1 text-xs border rounded-3xl" placeholder="Faith">
      </section>
      <section class="flex items-center mt-4">
        <span class="flex-1 text-xs">Phone</span>
        <input type="text" class="px-5 py-2.5 flex-1 text-xs border rounded-3xl" placeholder="080435432">
      </section>
      <section class="flex items-center mt-4">
        <span class="flex-1 text-xs">Role</span>
        <input type="text" class="px-5 py-2.5 flex-1 text-xs border rounded-3xl" placeholder="Admin">
      </section>
      <section class="flex items-center mt-4">
        <span class="flex-1 text-xs">Password</span>
        <input type="text" class="px-5 py-2.5 flex-1 text-xs border rounded-3xl" placeholder="*****">
      </section>
      <section class="flex items-center mt-4">
        <span class="flex-1 text-xs">Profile Image</span>
        <span class="flex-1 text-xs"><img src="@/assets/pp.png" alt="pp" /></span>
      </section>
      <section class="flex justify-center gap-6 mt-8">
        <button class="py-3 px-10 w-64 rounded-3xl bg-gray-500 text-white text-sm" @click="onCancel">Cancel</button>
        <button class="py-3 px-10 w-64 rounded-3xl bg-main text-white text-sm">Update Details</button>
      </section>
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits(["cancel"])

const onCancel = ()=>{
    emit("cancel")
}
</script>
