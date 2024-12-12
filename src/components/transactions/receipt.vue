<template>
  <div class=" w-full min-h-[100dvh] px-32 bg-white my-5 py-10">
    <section class="flex flex-col gap-1 justify-center items-center">
      <img src="@/assets/logo.png" alt="logo" class="w-10 aspect-square" />
      <p class="text-center font-semibold text-main arima ">WeQuickPay</p>
      <p class="mb-2">2:00pm | 12th April 2024</p>
      <p class="font-light text-sm">Successful</p>
      <p class="font-semibold text-2xl text-orange-500">₦100,000.00</p>
    </section>
    <section class="mt-10 text-sm text-main">
        <div class="flex mt-5 justify-between">
            <span>
                Account type
            </span>
            <span class="font-semibold">
                Personal
            </span>
        </div>
        <div class="flex mt-5 justify-between">
            <span>
                Transaction type
            </span>
            <span class="font-semibold">
                Wallet to bank
            </span>
        </div>
        <div class="flex mt-5 justify-between">
            <span>
                Receipient Details
            </span>
            <p class="font-semibold flex  gap-4 flex-col items-end">
                <span>Mallan Isa Store</span> 
                <span class="font-light">WeQuickPay | 0123456789</span>
            </p>
        </div>
        <div class="flex mt-5 justify-between">
            <span>
                Sender Details
            </span>
            <p class="font-semibold flex  gap-4 flex-col items-end">
                <span>Faith Ujunwa</span> 
                <span class="font-light">WeQuickPay | 0123456789</span>
            </p>
        </div>
        <div class="flex mt-5 justify-between">
            <span>
                Note
            </span>
            <span class="font-semibold">
                Wallet to bank
            </span>
        </div>
        <div class="flex mt-5 justify-between">
            <span>
                Transaction reference
            </span>
            <span class="font-semibold">
                12134324934234234234
            </span>
        </div>
    </section>
    <section class="flex justify-center gap-10 mt-20 ">
        <button class="flex flex-col items-center justify-normal gap-2">
            <img class="w-16 aspect-square" src="@/assets/reverse.png" alt="">
            <span class="text-sm font-light">Reverse</span>
        </button>
        <button class="flex flex-col items-center justify-normal gap-2">  <img class="w-16 aspect-square" src="@/assets/refund.png" alt="">
            <span class="text-sm font-light">Refund</span></button>
        <button class="flex flex-col items-center justify-normal gap-2">  <img class="w-16 aspect-square" src="@/assets/cancelation.png" alt="">
            <span class="text-sm font-light">Cancel</span></button>
    </section>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Arima:wght@100..700&display=swap");
.arima {
  font-family: "Arima", system-ui;
}
</style>
