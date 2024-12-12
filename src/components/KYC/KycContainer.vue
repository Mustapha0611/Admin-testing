<template>
  <div class="">
    <!-- Search and Action bar -->
    <section class="flex items-center justify-center py-10 gap-4 p-6 bg-white">
      <div class="">
        <IconField class="xl:w-[20rem] w-full">
          <InputText v-model="searchQuery" placeholder="Search" fluid />
          <InputIcon class="pi pi-search" />
        </IconField>
      </div>
      <div class="flex items-center gap-2">
        <span>Bulk Action</span>
        <Select
          v-model="selectedBulkAction"
          :options="bulkActions"
          optionLabel="name"
          placeholder="Select Action"
          :highlightOnSelect="false"
          class="w-full md:w-auto"
        />
      </div>
      <div class="flex items-center gap-3">
        <span>Filter by:</span>
        <Select
          v-model="selectedFilter"
          :options="filterOptions"
          optionLabel="name"
          placeholder="Select an option"
          :highlightOnSelect="false"
          class="w-full md:w-auto"
        />
      </div>
    </section>
    <section>
      <div class="grid grid-cols-3 my-4 gap-4">
        <div
          v-for="kyc of filteredUsersKyc"
          :key="kyc.id"
          class="bg-white rounded-md p-6"
        >
          <aside class="flex justify-between">
            <span v-if="selectedBulkAction">
              <input
                type="checkbox"
                name=""
                class="custom-checkbox"
                id=""
                
              />
            </span>
            <span v-if="!kyc.attended" class="ml-auto"
              ><i class="pi pi-circle-on text-xs text-green-500"></i
            ></span>
          </aside>
          <div class="flex justify-between">
            <span>
              <img :src="kyc.avatar" class="w-20 aspect-square" />
            </span>
            <span class="text-xs">{{ kyc.amount }}</span>
          </div>
          <div class="flex flex-col gap-3 text-xs mt-10">
            <p class="font-semibold text-base">
              {{ kyc.name }}
            </p>
            <p>
              {{ kyc.dateOfBirth }}
            </p>
            <p>
              {{ kyc.phoneNumber }}
            </p>
          </div>
          <div class="flex justify-end" @click="gotoDetails()">
            <span
              class="px-3 py-1.5 rounded-2xl text-xs text-slate-100"
              :class="{
                'bg-gray-600': kyc.level === 1,
                'bg-gray-800': kyc.level === 2,
                'bg-orange-600': kyc.level === 3,
                'bg-green-600': kyc.level === 4,
              }"
            >
              level
              {{ kyc.level }}</span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Pagination -->
    <!-- <div class="flex justify-center mt-4">
          <Pagination
            v-model:page="currentPage"
            :total-records="filteredAccounts.length"
            rows="10"
            :rows-per-page-options="[10, 20, 50]"
          />
        </div> -->
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import confirmDialog from "../util/confirmDialog.vue";
import deleteicon from "@/assets/delete.svg";
import deactivate from "@/assets/deactivate.svg";
import avatar from "@/assets/Avatar.png";
import avatar2 from "@/assets/avatar2.png";
import thomas from "@/assets/avatar3.png";
import { usepopUpControl } from "@/stores/popUpControl.js";
const selectedAccounts = ref([]);
const router = useRouter()
// Access the store
const popUpControl = usepopUpControl();

// Search, Filter, and Bulk Actions
const searchQuery = ref("");
const bulkActions = ref([{ name: "Retrieve" }, { name: "Flag" }]);
const selectedBulkAction = ref(null);
const filterOptions = ref([
  { name: "Level 1" },
  { name: "Level 2" },
  { name: "Level 3" },
  { name: "Level 4" },
]);
const selectedFilter = ref(null);

const UsersKyc = ref([
  {
    name: "Adamu Ibrahim",
    amount: "₦85,000.00",
    avatar: avatar,
    level: 2,
    dateOfBirth: "22-11-1985",
    phoneNumber: "+2348030000002",
    attended: false,
  },
  {
    name: "Tunde Adebayo",
    amount: "₦70,000.00",
    avatar: thomas,
    level: 1,
    dateOfBirth: "18-03-1995",
    phoneNumber: "+2348030000004",
    attended: false,
  },
  {
    name: "Bola Oladele",
    amount: "₦95,000.00",
    avatar: avatar2,
    level: 1,
    dateOfBirth: "10-07-1992",
    phoneNumber: "+2348030000006",
    attended: false,
  },
  {
    name: "Kemi Adeyemi",
    amount: "₦125,000.00",
    avatar: avatar,
    level: 3,
    dateOfBirth: "30-01-1991",
    phoneNumber: "+2348030000008",
    attended: false,
  },
  {
    name: "Chinelo Eze",
    amount: "₦120,000.00",
    avatar: thomas,
    level: 3,
    dateOfBirth: "15-05-1990",
    phoneNumber: "+2348030000001",
    attended: true,
  },
  {
    name: "Ngozi Udo",
    amount: "₦150,000.00",
    avatar: avatar2,
    level: 4,
    dateOfBirth: "07-09-1988",
    phoneNumber: "+2348030000003",
    attended: true,
  },
  {
    name: "Mariam Bello",
    amount: "₦110,000.00",
    avatar: avatar,
    level: 2,
    dateOfBirth: "25-12-1993",
    phoneNumber: "+2348030000005",
    attended: true,
  },
  {
    name: "Fatima Ali",
    amount: "₦200,000.00",
    avatar: thomas,
    level: 4,
    dateOfBirth: "20-08-1996",
    phoneNumber: "+2348030000007",
    attended: true,
  },
  {
    name: "Emeka Okoro",
    amount: "₦50,000.00",
    avatar: avatar2,
    level: 2,
    dateOfBirth: "14-04-1994",
    phoneNumber: "+2348030000009",
    attended: true,
  },
]);
const gotoDetails = ()=>{
 router.push('/kyc-details')
}
console.log(UsersKyc.value);

// Pagination
const currentPage = ref(1);

// Dynamic filtering of accounts based on search and filter
const filteredUsersKyc = computed(() => {
  let result = UsersKyc.value;

  if (searchQuery.value) {
    result = result.filter((account) =>
      account.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  if (selectedFilter.value) {
    if (selectedFilter.value.name === "Level 1") {
      result = result.filter((kyc) => kyc.level === 1);
    } else if (selectedFilter.value.name === "Level 2") {
      result = result.filter((kyc) => kyc.level === 2);
    } else if (selectedFilter.value.name === "Level 3") {
      result = result.filter((kyc) => kyc.level === 3);
    } else if (selectedFilter.value.name === "Level 4") {
      result = result.filter((kyc) => kyc.level === 4);
    }
  }

  return result;
});

</script>

<style scoped>
/* Add any additional Tailwind styling here if needed */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter,
.fade-leave-to {
  transition: opacity 0.4s ease;
  opacity: 0;
}

.custom-checkbox {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #ffffff; /* Tailwind's bg-gray-200 */
  border-radius: 9999px; /* Tailwind's rounded-full */
  border: 1px solid #b8b8b8; /* Tailwind's border-gray-300 */
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s, border-color 0.2s;
}
.custom-checkbox:checked {
  background-color:#031942; /* Tailwind's bg-blue-500 */
   /* Tailwind's border-blue-500 */
}
.custom-checkbox:checked::after {
  content: "";
  position: absolute;
  top: 0.2rem;
  left: 10%;
  width: 1rem;
  height: 1rem;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white"><path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L7 12.586 4.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l9-9a1 1 0 000-1.414z" clip-rule="evenodd" /></svg>');
  background-size: cover;
}

</style>
