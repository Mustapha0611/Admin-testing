<template>
    <div class="bg-slate-50 rounded-xl h-56 w-full flex flex-col items-end justify-between p-5">
        <div><router-link to="" class="flex bg-main text-white rounded-3xl py-2 px-6 gap-2"><img src="@/assets/arrow-back.svg" class="w-5 h-4"><span class="text-sm font-semibold">Back</span></router-link></div>
        <aside class="flex gap-5">
            <div class="flex flex-col gap-2 items-center">
                <img src="@/assets/update.png" alt="updates" class="w-12">
                <button class="text-xs">Update</button>
            </div>
            <div class="flex flex-col gap-2 items-center">
                <img src="@/assets/inactive.png" alt="updates" class="w-12">
                <button class="text-xs">Deactivate</button>
            </div>
            <div class="flex flex-col gap-2 items-center">
                <img src="@/assets/blockprofile.png" alt="updates" class="w-12">
                <button class="text-xs">Block</button>
            </div>
            <div class="flex flex-col gap-2 items-center">
                <img src="@/assets/deleteprofile.png" alt="updates" class="w-12">
                <button class="text-xs">Delete</button>
            </div>
        </aside>
    </div>
</template>