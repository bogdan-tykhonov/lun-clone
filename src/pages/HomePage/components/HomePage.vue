<script setup lang="ts">
import SearchSection from './SearchSection.vue';
import NewBuildingsPreview from './NewBuildingsPreview.vue';
import CottagesPreview from './CottagesPreview.vue';
import BuildersPreview from './BuildersPreview.vue';
</script>

<template>
  <SearchSection />

  <section class="flex flex-col gap-20 mt-20 container">
    <NewBuildingsPreview />

    <CottagesPreview />

    <BuildersPreview />
  </section>
</template>
