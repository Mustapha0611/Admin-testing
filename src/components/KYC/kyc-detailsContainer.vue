<template>
    <div class="grid grid-cols-2  gap-5 py-16">
       <section class="bg-white  rounded-md shadow-sm  p-8">
        <div class="flex justify-between mb-5">
            <span class=" font-semibold text-xl">
                Level 1
            </span>
            <span class="border-2 text-green-500 flex items-center justify-center border-green-500 rounded-full py-1 px-1.5 text-xs font-bold">
                <i class="pi pi-check"></i>

            </span>
        </div>
        <div class="flex justify-between text-sm mb-2">
            <span class=" font-light ">
                Your limit for daily transactions
            </span>
            <span class=" font-bold">
                ₦50,000.00
            </span>
        </div>
        <div class="flex justify-between text-sm">
            <span class=" font-light ">
                Your highest limit on account balance
            </span>
            <span class=" font-bold">
                ₦100,000.00
            </span>
        </div>
      <div class="my-5 flex flex-col gap-4">
        <aside class="flex bg-slate-100 py-4 px-6 rounded-3xl">
            <span class="flex-1 text-sm font-semibold">
                Firstname
            </span>
            <span class="flex-1 text-sm">
                Faith Ojo
            </span>
        </aside>
        <aside class="flex bg-slate-100 py-4 px-6 rounded-3xl">
            <span class="flex-1 text-sm font-semibold">
                Lastname
            </span>
            <span class="flex-1 text-sm">
                Ozor
            </span>
        </aside>
        <aside class="flex bg-slate-100 py-4 px-6 rounded-3xl">
            <span class="flex-1 text-sm font-semibold">
                Email
            </span>
            <span class="flex-1 text-sm">
                FaithOjo@gmail.com
            </span>
        </aside>
      </div>
      <div class="flex justify-end">
        <button class="py-3 px-10 bg-main text-white text-sm rounded-3xl">Reverse</button>
      </div>
       </section>
       <section class="bg-white  rounded-md shadow-sm  p-8 relative">
        <div class="absolute top-0 left-0 bg-white/80 w-full h-full" v-if="level < 1">

        </div>
        <div class="flex justify-between mb-5">
            <span class=" font-semibold text-xl">
                Level 2
            </span>
            <span class="border-2 text-green-500 flex items-center justify-center border-green-500 rounded-full py-1 px-1.5 text-xs font-bold">
                <i class="pi pi-check"></i>

            </span>
        </div>
        <div class="flex justify-between text-sm mb-2">
            <span class=" font-light ">
                Your limit for daily transactions
            </span>
            <span class=" font-bold">
                ₦100,000.00
            </span>
        </div>
        <div class="flex justify-between text-sm">
            <span class=" font-light ">
                Your highest limit on account balance
            </span>
            <span class=" font-bold">
                ₦5,000,000.00
            </span>
        </div>
      <div class="my-5 flex flex-col gap-4">
        <aside class="flex bg-slate-100 py-4 px-6 rounded-3xl">
            <span class="flex-1 text-sm font-semibold">
                Bvn
            </span>
            <span class="flex-1 text-sm">
                1234567890
            </span>
        </aside>
        <aside class="flex bg-slate-100 py-4 px-6 rounded-3xl">
            <span class="flex-1 text-sm font-semibold">
                Date of Birth
            </span>
            <span class="flex-1 text-sm">
                06/11/1921
            </span>
        </aside>
        <aside class="flex bg-slate-100 py-4 px-6 rounded-3xl">
            <span class="flex-1 text-sm font-semibold">
                Mobile number
            </span>
            <span class="flex-1 text-sm">
                +2347033435654
            </span>
        </aside>
      </div>
      <div class="flex justify-end">
        <button class="py-3 px-10 bg-main text-white text-sm rounded-3xl">Reverse</button>
      </div>
       </section>
       <section class="bg-white  rounded-md shadow-sm  p-8 relative">
        <div class="absolute top-0 left-0 bg-white/80 w-full h-full" v-if="level < 2">
        </div>
        <div class="flex justify-between mb-5">
            <span class=" font-semibold text-xl">
                Level 3
            </span>
            <span class="border-2 text-green-500 flex items-center justify-center border-green-500 rounded-full py-1 px-1.5 text-xs font-bold">
                <i class="pi pi-check"></i>

            </span>
        </div>
        <div class="flex justify-between text-sm mb-2">
            <span class=" font-light ">
                Your limit for daily transactions
            </span>
            <span class=" font-bold">
                ₦5,000,000.00
            </span>
        </div>
        <div class="flex justify-between text-sm">
            <span class=" font-light ">
                Your highest limit on account balance
            </span>
            <span class=" font-bold">
                ₦10,000,000.00
            </span>
        </div>
      <div class="my-5 flex flex-col gap-4">
        <aside class="flex justify-between items-center bg-slate-100 py-2 px-6 rounded-3xl">
            <span class="text-sm font-semibold">
                Proof of identity
            </span>
            <span class=" text-sm">
                <img src="@/assets/Avatar.png" alt="" class="w-10 h-10">
            </span>
            <span class=" text-sm">
                <button class="bg-main text-white text-xs px-4 py-1 rounded-2xl">View</button>
            </span>
        </aside>
        <aside class="flex justify-between items-center bg-slate-100 py-2 px-6 rounded-3xl">
            <span class="text-sm font-semibold">
                Utility bill
            </span>
            <span class=" text-sm">
                <img src="@/assets/Avatar.png" alt="" class="w-10 h-10">
            </span>
            <span class=" text-sm">
                <button class="bg-main text-white text-xs px-4 py-1 rounded-2xl">View</button>
            </span>
        </aside>
        <aside class="flex justify-between items-center bg-slate-100 py-2 px-6 rounded-3xl">
            <span class="text-sm font-semibold">
               Signature
            </span>
            <span class=" text-sm">
                <img src="@/assets/Avatar.png" alt="" class="w-10 h-10">
            </span>
            <span class=" text-sm">
                <button class="bg-main text-white text-xs px-4 py-1 rounded-2xl">View</button>
            </span>
        </aside>
      </div>
      <div class="flex justify-end">
        <button class="py-3 px-10 bg-main text-white text-sm rounded-3xl">Reverse</button>
      </div>
       </section>
       <section class="bg-white  rounded-md shadow-sm  p-8 relative">
        <div class="absolute top-0 left-0 bg-white/80 w-full h-full" v-if="level < 3">
        </div>
        <div class="flex justify-between mb-5">
            <span class=" font-semibold text-xl">
                Business
            </span>
            <span class="border-2 text-green-500 flex items-center justify-center border-green-500 rounded-full py-1 px-1.5 text-xs font-bold">
                <i class="pi pi-check"></i>

            </span>
        </div>
        <div class="flex justify-between text-sm mb-2">
            <span class=" font-light ">
                Your limit for daily transactions
            </span>
            <span class=" font-bold">
                ₦10,000,000.00
            </span>
        </div>
        <div class="flex justify-between text-sm">
            <span class=" font-light ">
                Your highest limit on account balance
            </span>
            <span class=" font-bold">
                ₦50,000,000.00
            </span>
        </div>
      <div class="my-5 flex flex-col gap-4">
        <aside class="flex justify-between items-center bg-slate-100 py-2 px-6 rounded-3xl">
            <span class="text-sm font-semibold">
                International Passport
            </span>
            <span class=" text-sm">
                <img src="@/assets/Avatar.png" alt="" class="w-10 h-10">
            </span>
            <span class=" text-sm">
                <button class="bg-main text-white text-xs px-4 py-1 rounded-2xl">View</button>
            </span>
        </aside>
        <aside class="flex justify-between items-center bg-slate-100 py-2 px-6 rounded-3xl">
            <span class="text-sm font-semibold">
                CAC certificate
            </span>
            <span class=" text-sm">
                <img src="@/assets/Avatar.png" alt="" class="w-10 h-10">
            </span>
            <span class=" text-sm">
                <button class="bg-main text-white text-xs px-4 py-1 rounded-2xl">View</button>
            </span>
        </aside>
        <aside class="flex justify-between items-center bg-slate-100 py-2 px-6 rounded-3xl">
            <span class="text-sm font-semibold">
               Passport photo
            </span>
            <span class=" text-sm">
                <img src="@/assets/Avatar.png" alt="" class="w-10 h-10">
            </span>
            <span class=" text-sm">
                <button class="bg-main text-white text-xs px-4 py-1 rounded-2xl">View</button>
            </span>
        </aside>
      </div>
      <div class="flex justify-end">
        <button class="py-3 px-10 bg-main text-white text-sm rounded-3xl">Reverse</button>
      </div>
       </section>
       
    </div>
</template>
<script setup>
 import { ref } from 'vue';

 let level = ref(2)
</script>