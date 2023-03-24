<script setup lang="ts">

import SearchInput from '@components/SearchInput.vue';
import FiltersDropDown from './FiltersDropDown.vue';
</script>

<template>
  <section class="flex items-center gap-10">
    <SearchInput
      theme="dark"
      class="max-w-3xl"
    />

    <div>
      <FiltersDropDown />
    </div>
  </section>
</template>
