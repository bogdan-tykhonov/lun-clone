<script setup lang="ts">
import Arrow from '@components/icons/Arrow.vue';

defineProps({
  text: {
    type: [Number, String],
    default: ''
  },
  link: {
    type: String,
    required: true
  }
});
</script>

<template>
  <router-link
    :to="{
      name: link
    }"
    class="flex items-center gap-2 bg-gray-200 px-4 py-1 rounded-md hover:bg-gray-300
    duration-200 transition-all"
  >
    <span v-text="text" />

    <Arrow />
  </router-link>
</template>
