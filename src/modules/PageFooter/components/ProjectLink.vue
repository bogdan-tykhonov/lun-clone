<script setup lang="ts">
defineProps({
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
});
</script>


<template>
  <a
    :href="link"
    class="grayscale hover:grayscale-0 transition-all duration-200"
  >
    <slot />
    <p
      class="text-xs mt-2 max-w-36"
      v-text="description"
    />
  </a>
</template>
