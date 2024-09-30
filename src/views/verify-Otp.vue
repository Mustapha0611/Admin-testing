<script setup>
import { ref } from 'vue'; 
import Button from "primevue/button";



</script>

<template>
  <main>
    <div class="flex items-center justify-center h-[100dvh] px-20 gap-20">
      <section>
        <div class="w-[400px] h-[200px]">
          <img
            src="@/assets/logo-image.png"
            alt="brand logo"
            class="w-full h-full"
          />
        </div>
      </section>
      <section
        class="w-[500px] h-auto border-2 rounded-2xl py-8 px-4"
      >
        <h1 class="font-bold text-2xl">{{$t('verifyOtp.header')}}</h1>
        <p class="py-2 mb-6">
          {{ $t('verifyOtp.subheading') }}
        </p>
        <div class="flex items-center justify-center  flex-col">
            <span class="text-gray-500 text-4xl">20s</span>
            <span>{{ $t('verifyOtp.timing') }}</span>
        </div>
        <form>
          <div class="w-full mb-2">
            <label for="number" class="font-semibold text-xs block py-1">
              {{$t('verifyOtp.Otp')}}
            </label>
            <InputOtp v-model="value" integerOnly :length="6" />
          </div>

          <div class="py-6">
            <Button :label="$t('verifyOtp.button')" class="!bg-[#19c5af] w-full text-sm rounded-xl !border-0 py-4" />
          </div> 
          
        </form>
        <p class="text-center text-sm">{{ $t('verifyOtp.didntreceive') }} <span class="text-gray-600">{{ $t('verifyOtp.resend') }}</span></p>
      </section>
    </div>
  </main>
</template>
