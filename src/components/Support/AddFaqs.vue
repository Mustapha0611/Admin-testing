<template>
    <div class="bg-black/40 w-full h-screen fixed top-0 left-0 flex justify-center items-center">
        <section class="bg-white h-[80%] w-[80%] px-20 py-5 rounded-xl">
            <h1 class="text-center py-10 font-semibold">Add FAQ</h1>
            <form>
                <div class="mb-5">
                    <label for="faq-question">FAQ question</label>
                    <input type="text" placeholder="FAQ question goes here" class="w-full border rounded-3xl text-xs px-3 py-3" >
                </div>
                <div class="mb-5">
                    <label for="faq-question">Category</label>
                    <Select
                        v-model="selectedFilter"
                        :options="filterOptions"
                        optionLabel="name"
                        placeholder="Select Category"
                        :highlightOnSelect="false"
                        class="w-full"
                        />
                    <!-- <input type="text" placeholder="FAQ question goes here" class="w-full border rounded-3xl text-xs px-3 py-3" > -->
                </div>
                <div class="mb-5">
                    <label for="faq-question">FAQ Answer</label>
                    <input type="text" placeholder="FAQ question goes here" class="w-full border rounded-3xl text-xs px-3 py-3" >
                </div>
                <div class="flex justify-end gap-10 mt-20">
                    <button class="bg-slate-600 text-white text-sm rounded-3xl py-3 w-52 px-10">Cancel</button><button class="bg-main text-white text-sm rounded-3xl py-3 w-52 px-10">Upload FAQ</button>
                </div>
            </form>
        </section>
    </div>
</template>
<script></script>