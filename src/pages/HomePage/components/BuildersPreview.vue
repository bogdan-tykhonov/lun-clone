<script setup lang="ts">
import PreviewHeading from './PreviewHeading.vue';
import BuilderItem from '@components/BuilderItem.vue';
</script>

<template>
  <section>
    <PreviewHeading
      :items-count="59"
      label="Забудовники Києва"
    />

    <section class="grid grid-cols-4 gap-6">
      <BuilderItem
        class="bg-[#2365af]"
        img="https://img.lunstatic.net/company-premium/1945.svg"
        :rented="12"
        :in-process="43"
      />

      <BuilderItem
        class="bg-[#E20413]"
        img="https://img.lunstatic.net/company-premium/1358.svg"
        :rented="12"
        :in-process="43"
      />

      <BuilderItem
        class="bg-[#e2a82a]"
        img="https://img.lunstatic.net/company-premium/1923.svg"
        :rented="12"
        :in-process="43"
      />

      <BuilderItem
        class="bg-[#CCCCCC]"
        img="https://lun.ua/images/default_premium_logo.svg"
        :rented="12"
        :in-process="43"
      />
    </section>
  </section>
</template>
