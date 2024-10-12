<template>
    <div class="bg-slate-50 flex">
        <section class="">
            <sideBar />
        </section>
        <section class="py-4 px-4 flex-1">
            <headerContent />
            <usersSummary />
            <TransactionDetails />
            <AnalyticContainer />
        </section>
    </div>
</template>
<script setup>
import sideBar from "../components/Dashboard/sideBar.vue"
import headerContent from "@/components/Dashboard/headerContent.vue";
import usersSummary from "@/components/Dashboard/usersSummary.vue";
import TransactionDetails from "@/components/Dashboard/TransactionDetails.vue";
import AnalyticContainer from "@/components/Dashboard/Analytics/AnalyticContainer.vue";
</script>