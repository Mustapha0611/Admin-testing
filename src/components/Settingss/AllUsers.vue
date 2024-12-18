<template>
    <div class="bg-white my-10 px-10 py-5 w-full h-screen rounded-lg">
        <section class="h-28 border-b-2  flex justify-between items-center">
            <span>
                Deactivate All users
            </span>
            <span>
            <ToggleSwitch v-model="DeactiveUsers" />
            </span>
        </section>
        <section class="h-28 border-b-2  flex justify-between items-center">
            <span>
                Deactivate All Subscribers
            </span>
            <span>
            <ToggleSwitch v-model="DeactiveSubscribers" />
            </span>
        </section>
        <section class="h-28 border-b-2  flex justify-between items-center">
            <span>
                Deactivate All Agents
            </span>
            <span>
            <ToggleSwitch v-model="DeactiveAgents" />
            </span>
        </section>
        <section class="h-28 border-b-2  flex justify-between items-center">
            <span>
                Deactivate All Admins
            </span>
            <span>
            <ToggleSwitch v-model="DeactiveAdmins" />
            </span>
        </section>
        <section class="h-28  flex justify-between items-center">
            <span>
                Deactivate All Editors
            </span>
            <span>
            <ToggleSwitch v-model="DeactiveEditors" />
            </span>
        </section>
    </div>
</template>
<script setup>
import { ref } from 'vue';

let DeactiveUsers = ref(false)
let DeactiveSubscribers = ref(true)
let DeactiveAgents = ref(false)
let DeactiveAdmins = ref(true)
let DeactiveEditors = ref(false)

</script>