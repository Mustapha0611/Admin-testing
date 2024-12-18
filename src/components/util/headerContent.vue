<template>
  <div class="flex justify-between">
    <section class="flex flex-col gap-4 ">
      <aside
        v-if="
          route.path === '/AllUsers' ||
          route.path === '/user-details' ||
          route.path === '/Agents'
        "
      >
        All Users <span v-if="route.path === '/AllUsers'"> / Users </span>
        <span v-if="route.path === '/Agents'"> / Agents</span>
        <span v-if="route.path === '/user-details'"> / UserDetails</span>
      </aside>
      <span v-if="route.path === '/Transactions' || route.path==='/transaction-details'">Transactions</span>
      <span v-if="route.path === '/VerifyKyc' || route.path==='/kyc-details'">KYC verification</span>
      <span v-if="route.path === '/Settings'">All Settings</span>
      <span v-if="route.path === '/Notifications' || route.path==='/kyc-details'">All Notifications</span>
      <span class="text-2xl font-semibold"> WeQuickPay <span v-if="route.path==='/AllUsers'">Users</span></span>
      <!-- <span class="text-2xl font-semibold" v-if="route.path === '/Transactions'"> WeQuickPay Users </span> -->
    </section>
    <section class="flex  items-start gap-5 ">
      <button class="flex items-center gap-2 bg-white px-3 py-3 rounded-3xl">
        <img src="@/assets/menu.svg" alt="" /><span class="text-xs">Menu</span>
      </button>
      <button>
        <span class="pi pi-bell p-2 rounded-full bg-white"></span>
      </button>
      <button class="bg-white flex items-center gap-2 py-1 px-3 rounded-3xl">
        <span class="pi pi-user p-2 rounded-full bg-black text-white"></span
        ><span class="text-xs">Faith Unjunwo..</span>
      </button>
      <button class="p-2 rounded-full bg-white" @click="handleLogOut()">
        <img src="@/assets/logout.svg" alt="logout" />
      </button>
    </section>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore();
const router = useRouter();
const route = useRoute();
const handleLogOut = () => {
  console.log("logged out");
  auth.logOut();
  router.push("/");
};
</script>
