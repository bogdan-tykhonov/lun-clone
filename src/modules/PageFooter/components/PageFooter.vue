<script setup lang="ts">
import LogoIcon from '@components/icons/LogoIcon.vue';
import FaceBookIcon from '@components/icons/FaceBookIcon.vue';
import YouTubeIcon from '@components/icons/YouTubeIcon.vue';
import InstagramIcon from '@components/icons/InstagramIcon.vue';
import ProjectLink from '@modules/PageFooter/components/ProjectLink.vue';

import { projectLinks } from '@modules/PageFooter/inc/project-links';
</script>

<template>
  <footer class="bg-[#0a0a28] py-12 text-white">
    <section class="container">
      <div class="flex items-center justify-between"> 
        <LogoIcon />

        <div class="flex gap-6 items-center">
          <h4
            class="font-bold"
            v-text="'Ми в соцмережах'"
          />

          <a
            href="https://www.facebook.com/lun.ua"
            class="hover:scale-110 duration-200 transition-transform"
            target="_blank"
          >
            <FaceBookIcon />
          </a>

          <a
            href="https://www.youtube.com/c/lunua"
            class="hover:scale-110 duration-200 transition-transform"
            target="_blank"
          >
            <YouTubeIcon />
          </a>

          <a
            href="https://www.instagram.com/lun.ua/"
            class="hover:scale-110 duration-200 transition-transform"
            target="_blank"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>

      <hr class="h-[1px] bg-gray w-full border-none my-12">

      <div class="flex gap-40">
        <div class="flex gap-12 text-sm">
          <div class="flex flex-col gap-5">
            <h3
              class="font-bold"
              v-text="'Про ЛУН'"
            />

            <a
              href=""
              class="hover:underline"
              v-text="'Вакансії'"
            />

            <a
              href=""
              class="hover:underline"
              v-text="'FAQ'"
            />

            <a
              href=""
              class="hover:underline"
              v-text="'Девелоперам: реклама на ЛУН'"
            />
          </div>

          <div class="flex flex-col gap-5">
            <h3
              class="font-bold"
              v-text="'Контакти'"
            />

            <a
              href=""
              class="hover:underline"
              v-text="'Для ЗМІ'"
            />

            <a
              href=""
              class="hover:underline"
              v-text="'Команда підтримки'"
            />
          </div>
        </div>

        <div>
          <h3
            class="text-sm"
            v-text="'Iнші проєкти'"
          />

          <div class="grid grid-cols-4 gap-x-5 gap-y-9 mt-5">
            <ProjectLink
              v-for="(projectLink, index) in projectLinks"
              :key="index"
              :link="projectLink.link"
              :description="projectLink.description"
            >
              <component
                :is="projectLink.icon"
                class="h-6"
              />
            </ProjectLink>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
