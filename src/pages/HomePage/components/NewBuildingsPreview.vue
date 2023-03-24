<script setup>
import BuildingItem from '@components/BuildingItem.vue';
import BuildingItemFooter from './BuildingItemFooter.vue';
import PreviewHeading from './PreviewHeading.vue';
</script>

<template>
  <section>
    <PreviewHeading
      :items-count="437"
      link="newBuildings"
      label="Новобудови Києва"
    />

    <section class="grid grid-cols-4 gap-6">
      <BuildingItem
        v-for="(item, index) in 10"
        :key="index"
      >
        <template #footer>
          <BuildingItemFooter />
        </template>
      </BuildingItem>
    </section>
  </section>
</template>
