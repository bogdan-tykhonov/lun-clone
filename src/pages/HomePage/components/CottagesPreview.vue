<script setup lang="ts">

import PreviewHeading from './PreviewHeading.vue';
import BuildingItem from '@components/BuildingItem.vue';
import BuildingItemFooter from './BuildingItemFooter.vue';
</script>

<template>
  <section>
    <PreviewHeading
      :items-count="43"
      label="Котеджі та таунхауси"
    />

    <section class="grid grid-cols-4 gap-6">
      <BuildingItem
        v-for="(item, index) in 3"
        :key="index"
      >
        <template #footer>
          <BuildingItemFooter />
        </template>
      </BuildingItem>
    </section>
  </section>
</template>


