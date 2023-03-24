<script setup lang="ts">
import BtnPrimary from '@ui/BtnPrimary.vue';
import DropDownArrowIcon from '@components/icons/DropDownArrowIcon.vue';
</script>


<template>
  <div class="relative">
    <BtnPrimary class="flex gap-2">
      Фільтри
      <DropDownArrowIcon />
    </BtnPrimary>

    <div class="absolute top-full bg-white shadow-lg rounded-md p-4 w-max">
      <div>
        <h4
          class="text-gray mb-2"
          v-text="'Готові проєкти у наявності'"
        />

        <BtnPrimary text="є продажі в збудованих будинках" />
      </div>
    </div>
  </div>
</template>
