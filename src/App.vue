<script setup lang="ts">
import Header from '@/modules/PageHeader';
import PageFooter from '@modules/PageFooter/components/PageFooter.vue';
</script>

<template>
  <Header />

  <main class="font-main text-black">
    <router-view />
  </main>

  <PageFooter class="mt-16" />
</template>
