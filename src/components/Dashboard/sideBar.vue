<template>
  <div class="w-72 h-screen bg-white px-10">
    <section class="flex justify-center gap-3 items-center py-4">
      <span>
        <img src="@/assets/logo.png" alt="logo" />
      </span>
      <span class="text-xl font-semibold text-main"> WeQuickPay </span>
    </section>
    <div class="py-4">
        <router-link to="" class="flex items-center px-4 py-2 gap-3 rounded-md bg-main text-white"><span class="pi pi-objects-column"></span><span>Dashboard</span></router-link>
    </div>
    <div class="card flex justify-center">
      <PanelMenu :model="items" class="w-full md:w-80">
        <template #item="{ item }">
          <router-link
            v-if="item.route"
            v-slot="{ href, navigate }"
            :to="item.route"
            custom
          >
            <a
              class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2"
              :href="href"
              @click="navigate"
            >
              <span :class="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
            </a>
          </router-link>
          <a
            v-else
            class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2"
            :href="item.url"
            :target="item.target"
          >
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <span
              v-if="item.items"
              class="pi pi-angle-right text-primary ml-auto"
            />
          </a>
        </template>
      </PanelMenu>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const items = ref([
  {
    label: "All users",
    icon: "pi pi-user",
    items: [
      {
        label: "Styled",
        icon: "pi pi-eraser",
        route: "/overview",
      },
      {
        label: "Unstyled",
        icon: "pi pi-heart",
        route: "/overview",
      },
    ],
  },
  {
    label: "Transactions",
    icon: "pi pi-arrow-right-arrow-left",
    items: [
      {
        label: "Vue.js",
        icon: "pi pi-star",
        route: "https://vuejs.org/",
      },
      {
        label: "Vite.js",
        icon: "pi pi-bookmark",
        route: "https://vuejs.org/",
      },
    ],
  },
  {
    label:"KYC verification",
    icon:"pi pi-check-circle",
    items:[

    ]
  },
  {
    label:"Support",
    icon:"pi pi-map-marker",
    items:[

    ]
  },
  {
    label:"Notification",
    icon:"pi pi-bell",
    items:[

    ]
  },
  {
    label:"Setting",
    icon:"pi pi-cog",
    items:[

    ]
  },
]);
</script>
