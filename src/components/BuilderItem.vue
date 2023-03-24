<script setup lang="ts">
defineProps({
  img: {
    type: String,
    required: true
  },
  rented: {
    type: Number,
    default: 0
  },
  inProcess: {
    type: Number,
    default: 0
  }
});
</script>

<template>
  <article class="rounded-md h-[350px] pt-12 p-4 flex flex-col group">
    <img
      class="w-4/6 mx-auto group-hover:scale-110 duration-200 transition-transform"
      :src="img"
    >

    <div class="mt-auto text-white">
      <p>
        <span
          class="font-bold"
          v-text="rented"
        />
        будинків здано
      </p>

      <p>
        <span
          class="font-bold"
          v-text="inProcess"
        />
        будинків в процесі
      </p>
    </div>
  </article>
</template>

