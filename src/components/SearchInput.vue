<script setup lang="ts">
import geoImg from '@images/geo.svg';
import searchImage from '@images/header-icons/search.svg';
import { computed, ref } from 'vue';

interface Props {
  theme: 'light' | 'dark'
}

withDefaults(defineProps<Props>(), {
  theme: 'light'
})

const searchState = ref < 'apartment' | 'location' | null > (null);
const defaultLocationName = 'Київська область';
const location = ref(defaultLocationName);
const apartment = ref('');

const handleFocusLocation = () => {
  searchState.value = 'location';
  location.value = '';
};

const handleBlurLocation = () => {
  searchState.value = null;
  location.value = defaultLocationName;
};

const handleBlurApartment = () => {
  searchState.value = null;
  apartment.value = '';
};

const inputIcon = computed(() => searchState.value === 'apartment' ? searchImage : geoImg);
</script>

<template>
  <div
      class="bg-white rounded-md py-3 px-4 shadow-lg max-w-xl flex w-full"
      :class="{
        '!bg-gray-light': theme === 'dark'
      }"
  >
    <img
      class="icon mr-2"
      :src="inputIcon"
    >

    <div
      v-if="searchState !== 'apartment'"
      class="pr-2 border-solid border-r border-gray-dark"
      :class="{
        'w-full border-none': searchState === 'location'
      }"
    >
      <input
        v-model="location"
        class="w-36"
        :class="{
          'w-full': searchState === 'location',
          'bg-gray-light': theme === 'dark'
        }"
        placeholder="Київська область"
        @focus="handleFocusLocation"
        @blur="handleBlurLocation"
      >
    </div>

    <div
      v-if="searchState !== 'location'"
      class="pl-4 flex-1"
      :class="{
        '!pl-0': searchState === 'apartment'
      }"
    >
      <input
        v-model="apartment"
        class="w-full"
        :class="{
           'bg-gray-light placeholder:text-black': theme === 'dark'
        }"
        placeholder="Введіть назву ЖК або району"
        @focus="searchState = 'apartment'"
        @blur="handleBlurApartment"
      >
    </div>
  </div>
</template>
