<template>
    <div class="grid grid-cols-4 gap-4 py-5">
        <usersCard
        type="Total Users"
        text-color="#E9EDF7"
        bg="#031942"
        :img=total
        :number="567" />
        <usersCard
        type="New users"
        bg="white"
        :img=newuser
        :number="123" />
        <usersCard
        type="Verified users"
        bg="white"
        :img=verified
        :number="89" />
        <div class="flex justify-end gap-4 items-center flex-row-reverse p-2 rounded-xl bg-white">
        <section class="flex flex-col gap-2">
            <p class="text-xs font-light">Top transactional User</p>
            <p>Faith Ojunwa</p>
        </section>
        <section>
            <img src="@/assets/trans.png" alt="total pay" class="h-10 w-10">
        </section>
    </div>
    </div>
</template>

<script setup>
import usersCard from './usersCard.vue';
import newuser from '@/assets/new.png'
import total from '@/assets/total.png'
import verified from '@/assets/verified.png'
</script>