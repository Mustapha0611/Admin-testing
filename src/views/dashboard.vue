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
import { onMounted } from "vue";
import {useDetails} from '@/stores/usersDetail'
import sideBar from "../components/util/sideBar.vue"
import headerContent from "@/components/util/headerContent.vue";
import usersSummary from "@/components/Dashboard/usersSummary.vue";
import TransactionDetails from "@/components/Dashboard/TransactionDetails.vue";
import AnalyticContainer from "@/components/Dashboard/Analytics/AnalyticContainer.vue";

const aggregate = useDetails()
onMounted(() => {
 aggregate.getUsersAgg()
})
</script>