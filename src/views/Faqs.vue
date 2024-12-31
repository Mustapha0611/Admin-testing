<template>
    <div class="bg-slate-50 flex">
        <section class="">
            <sideBar />
        </section>
        <section class="flex-1 p-4 ">
        <headerContent />
        <div class="flex justify-end">
          <button
            class="bg-main flex gap-4 text-xs justify-center items-center  my-5 text-white py-3 px-6 rounded-3xl"
          @click="addFaq"
            >
          <i class="pi pi-pencil"></i>
            <span>Add New FAQ</span>
          </button>
        </div>
        <FaqsContainer />
    </section>
    <AddFaqs v-if="showModel" class="z-10" />
    </div>
</template>
<script setup>
import sideBar from '@/components/util/sideBar.vue';
import headerContent from '@/components/util/headerContent.vue';
import FaqsContainer from '../components/Support/FaqsContainer.vue';
import AddFaqs from '@/components/Support/AddFaqs.vue';
import { ref } from 'vue';

const showModel = ref(false)
const addFaq = ()=>{
    showModel.value = !showModel.value
}
</script>