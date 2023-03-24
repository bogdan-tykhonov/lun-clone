<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <button
    class="bg-gray-light rounded-md px-4 py-1 hover:bg-gray-light-hover
      transition-colors duration-all"
  >
    <slot>
      {{ text }}
    </slot>
  </button>
</template>
