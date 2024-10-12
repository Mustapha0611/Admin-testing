<template>
    <div class="bg-slate-50 flex">
        <section>
            <sideBar />
        </section>
        <section class="flex-1 py-4 px-4">
        <headerContent />
        <div class="mb-4">
            <button class="bg-main px-6 text-sm ml-auto py-3 flex text-white gap-3 rounded-3xl"><img src="@/assets/back-arrow.png" alt="download" class="w-4 aspect-square"><span>Export as PDF</span></button>
        </div>
    </section>

    </div>
</template>
<script setup>
import sideBar from '@/components/Dashboard/sideBar.vue';
import headerContent from '@/components/Dashboard/headerContent.vue';
</script>