<template>
    <div class="flex gap-4 py-5 h-auto">
        <section class="flex-1">
            <userAnalytic />
        </section>
        <section class="flex-1 flex gap-4">
            <TopTransaction />
            <support />
        </section>
    </div>
</template>
<script setup>
    import userAnalytic from './userAnalytic.vue';
    import support from './support.vue';
</script>