<script setup lang="ts">
interface Props {
  img?: string
  route?: string,
  text: string
}

const props = defineProps<Props>();
</script>

<template>
  <router-link
      v-if="route" :to="{name: route}"
      class="flex items-center gap-2 py-1 px-3 hover:bg-gray-100 text-gray hover:text-black rounded-md"
  >
    <img v-if="img" :src="img" />
    <span v-text="text" />
  </router-link>

  <button
      v-else
      class="flex items-center gap-2 py-1 px-3 hover:bg-gray-100 text-gray hover:text-black rounded-md"
  >
    <img v-if="img" :src="img" />
    <span v-text="text" />
  </button>
</template>
