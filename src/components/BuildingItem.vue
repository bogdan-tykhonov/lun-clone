<script setup lang="ts">
import { ref } from 'vue';
import LikeIcon from '@components/icons/LikeIcon.vue';

const isLiked = ref(false);

const likeItem = () => {
  isLiked.value = !isLiked.value;
};
</script>

<template>
  <article>
    <div class="w-full aspect-square group relative overflow-hidden rounded-md">
      <img
        class="absolute object-cover group-hover:scale-105 transition-all duration-300"
        src="https://img.lunstatic.net/building-600x600/69295.jpg.webp"
        alt="building"
      >

      <div
        class="text-white p-2 absolute w-full z-10 h-full flex flex-col justify-between
        bg-gradient-to-t from-black via-transparent to-transparent"
      >
        <div class="flex justify-between items-start">
          <div class="flex flex-col gap-2 text-sm">
            <div class="py-1 px-2 bg-orange-dark rounded-md w-max">
              Квартири з ремонтом
            </div>

            <div class="py-1 px-2 bg-green rounded-md w-max">
              Курс НБУ
            </div>
          </div>

          <button
            class="bg-white p-[6px] rounded-md text-black transition-colors duration-200 hover:bg-gray-100"
            @click="likeItem"
          >
            <LikeIcon :active="isLiked" />
          </button>
        </div>

        <div>
          <h4
            class="font-medium text-xl"
            v-text="'Linden Luxury Residences'"
          />
          <p
            class="text-sm mt-1"
            v-text="'Budhouse Group'"
          />
        </div>
      </div>
    </div>

    <footer
      v-if="$slots.footer"
      class="mt-2"
    >
      <slot name="footer" />
    </footer>
  </article>
</template>
