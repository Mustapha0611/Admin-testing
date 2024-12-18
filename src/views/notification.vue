<template>
    <div class="bg-slate-50 flex">
        <section class="">
            <sideBar />
        </section>
        <section class="flex-1 p-4 ">
        <headerContent />
        <notContainer />
    </section>
    </div>
</template>
<script setup>
import sideBar from '@/components/util/sideBar.vue';
import headerContent from '@/components/util/headerContent.vue';
import notContainer from '../components/Notifications/notContainer.vue';
</script>