<script setup lang="ts">
import SubwayIcon from '@components/icons/SubwayIcon.vue';
import BusIcon from '@components/icons/BusIcon.vue';

</script>

<template>
  <div>
    <h4
      class="text-xl font-medium mb-1"
      v-text="'Від 51 тис. $'"
    />

    <div class="flex gap-2 text-gray">
      <div class="flex items-center gap-1">
        <SubwayIcon class="text-red" />
        <span v-text="'Академмістечко'" />
      </div>

      <div class="flex items-center gap-1">
        <BusIcon />
        <span v-text="'15 хв'" />
      </div>
    </div>

    <p
      class="line-clamp-1 text-gray"
      v-text="'2 будинки будується, 2 збудовано, 19 в проєкті'"
    />
  </div>
</template>
