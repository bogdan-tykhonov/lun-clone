<script setup lang="ts">
import cityImg from '@images/city.png';
import SearchInput from '@components/SearchInput.vue';
</script>

<template>
  <section class="h-64 bg-cover bg-gradient-to-r from-yellow-500 to-orange-500">
    <div class="container relative flex">
      <div class="my-auto w-full">
        <h1
          class="text-6xl text-white font-bold mb-6"
          v-text="'Україна — це Дім'"
        />

        <div class="flex items-center gap-6">
          <SearchInput />

          <button
            class="bg-transparent border-2 border-white rounded-md text-white py-3 px-12
          hover:opacity-70 duration-200 transition-all"
          >
            Шукати
          </button>
        </div>
      </div>

      <img
        class="absolute h-full right-0 top-0"
        :src="cityImg"
      >
    </div>
  </section>
</template>
