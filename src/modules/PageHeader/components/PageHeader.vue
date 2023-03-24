<script setup lang="ts">
import logo from '@/assets/images/logo.svg';
import newBuildings from '@/assets/images/header-icons/newBuildings.svg';
import apartments from '@/assets/images/header-icons/apartments.svg';
import map from '@/assets/images/header-icons/map.svg';
import builders from '@/assets/images/header-icons/builders.svg';
import search from '@/assets/images/header-icons/search.svg';
import LinkButton from '@ui/LinkButton.vue';
import FavoriteButton from "@modules/PageHeader/components/FavoriteButton.vue";


interface NavLink {
  text: string
  img: string
  route?: string
}

const navLinks: NavLink[] = [
  {
    text: 'Новобудови',
    img: newBuildings,
    route: 'home'
  },
  {
    text: 'Квартири',
    img: apartments,
    route: 'home'
  },
  {
    text: 'Карта',
    img: map,
    route: 'home'
  },
  {
    text: 'Забудовники',
    img: builders,
    route: 'home'
  },
  {
    text: 'search',
    img: search
  },
];

</script>

<template>
  <header class="font-main text-black py-4 sticky bg-white shadow-lg z-max top-0">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <img :src="logo" />

      <nav>
        <ul class="flex gap-2">
          <li
              v-for="(navLink, index) in navLinks"
              :key="index"
          >
            <LinkButton
              :text="navLink.text"
              :img="navLink.img"
              :route="navLink.route"
            />
          </li>
        </ul>
      </nav>


      <FavoriteButton />
    </div>
  </header>
</template>
