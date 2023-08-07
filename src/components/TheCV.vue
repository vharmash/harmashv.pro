<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import CVItem from './CVItem.vue'
import GreetingIcon from './icons/IconGreeting.vue'
import ToolingIcon from './icons/IconTooling.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import cv from './cv'
import ToTop from './ToTop.vue'
// console.log(cv)
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <GreetingIcon />
    </template>
    <template #heading>Introduction</template>
    <p>
      Hi, I'm Volodymryr, a seasoned IT professional with over ten years in the tech industry,
      specializing in Linux server management, Python scripting, and operational efficiency using
      JavaScript, Groovy, Jenkins, GIT/Gerrit, among others.
    </p>
    <p>
      I am well-versed in troubleshooting, quick decision-making, and prioritizing client
      satisfaction. My career at GlobalLogic has honed my skills in managing complex systems,
      automating tasks, and providing team leadership.
    </p>
    <p>
      Beyond technical expertise, I am known for my fast-paced learning, self-improvement, and a
      can-do attitude. My ambition and attention to detail fuel my drive for perfection, while my
      communication skills enable me to excel in team settings.
    </p>
    <p>
      Check out my experiences and skills below to see how I've contributed to GlobalLogic's digital
      footprint, and how my expertise and dedication can be a valuable addition to your team.
    </p>
    <p>Please feel free to reach out to me at <a href="">LinkedIn</a></p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Quick Summary</template>
    <ul class="my-2">
      <li v-for="item of cv.general_summary" :key="item" class="m-0">
        {{ item }}
      </li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Recent Tech Experience</template>
    <ul class="my-1">
      <li v-for="(value, key) in cv.recent_tech_experience" :key="key" class="m-0 py-0">
        <strong class="strong">{{ key }}:</strong> <span>{{ value }}</span>
      </li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Experience</template>
    <template v-for="item of cv.professional_experience" :key="item.period">
      <CVItem :item="item" />
    </template>
  </WelcomeItem>

  <ToTop />
</template>
