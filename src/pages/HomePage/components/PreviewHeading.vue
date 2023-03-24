<script setup lang="ts">

import FullListLink from '@ui/FullListLink.vue';

defineProps({
  label: {
    type: String,
    required: true
  },
  itemsCount: {
    type: Number,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

</script>

<template>
  <div class="flex gap-10 mb-6">
    <h2
      class="text-2xl font-medium"
      v-text="label"
    />

    <FullListLink
      :link="link"
      :text="itemsCount"
    />
  </div>
</template>
