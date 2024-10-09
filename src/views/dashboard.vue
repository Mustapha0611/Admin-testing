<template>
    <div class="bg-slate-50 flex">
        <section class="">
            <sideBar />
        </section>
        <section class="py-8 px-10 flex-1">
            <headerContent />
            <usersSummary />
            <div></div>
        </section>
    </div>
</template>
<script setup>
import sideBar from "../components/Dashboard/sideBar.vue"
import headerContent from "@/components/Dashboard/headerContent.vue";
import usersSummary from "@/components/Dashboard/usersSummary.vue";
</script>