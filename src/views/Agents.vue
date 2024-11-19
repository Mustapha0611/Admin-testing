<template>
    <div class="bg-slate-50 flex">
        <section class="">
            <sideBar />
        </section>
        <section class="flex-1 p-4 ">
        <headerContent />
        <div class="mb-4 flex gap-4">
            <button class="bg-main px-6 text-sm ml-auto py-3 flex text-white gap-3 rounded-3xl"><img src="@/assets/back-arrow.png" alt="download" class="w-4 aspect-square"><span>Export as PDF</span></button>
            <button class="bg-orange-500 px-6 text-sm  py-3 flex text-white gap-3 rounded-3xl" @click="popUpControl.showModal"><span class="pi pi-user-plus"></span><span>Add New Agent</span></button>
        </div>
        <AllAgentsContainer />
        <addAgentModal v-if="popUpControl.showAddAgent" />
    </section>
    </div> 
</template>
<script setup>
import addAgentModal from '@/components/Agents/addAgentModal.vue';
import sideBar from '@/components/util/sideBar.vue';
import { usepopUpControl } from '@/stores/popUpControl';
import headerContent from '@/components/util/headerContent.vue';
import AllAgentsContainer from '@/components/Agents/AllAgentsContainer.vue';
import { ref } from 'vue';

const popUpControl = usepopUpControl()


</script>
