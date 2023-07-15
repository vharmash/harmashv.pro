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
      Hello, I'm Volodymyr, a
      <strong>seasoned IT professional with over a decade of experience</strong> immersed in various
      facets of technology. I hold a demonstrated history of successfully navigating the
      <strong>Linux</strong> server environment, designing efficient QoL scripts using
      <strong>Python</strong>, and streamlining operations using a plethora of tools including
      <strong>JavaScript</strong>, <strong>Groovy</strong>, <strong>Jenkins</strong>,
      <strong>GIT/Gerrit</strong>, and more.
    </p>

    <p>
      Throughout my career, I've established a reputation for my strong
      <strong>troubleshooting</strong> capabilities, <strong>rapid decision-making</strong> skills,
      and an unwavering commitment to <strong>client satisfaction and quality</strong>. Not only do
      I have a deep technical expertise, but I also take pride in my capacity for
      <strong>rapid learning and self-improvement</strong>.
    </p>

    <p>
      Having worked at GlobalLogic in a range of roles, I have mastered the art of handling complex
      multi-component systems, resolving user issues, driving
      <strong>automation for bulk tasks</strong>, and
      <strong>providing mentorship and support to teams</strong>. I'm also quite familiar with
      <strong>creating interactive user interfaces</strong> using modern technologies like VUE and
      Tailwind CSS.
    </p>

    <p>
      In addition to my professional achievements, I bring a set of personal attributes that further
      enhance my value. I'm <strong>ambitious</strong>, <strong>detail-oriented</strong>, and
      <strong>passionate</strong>, always <strong>seeking perfection</strong> in my endeavors. I
      understand the importance of communication and <strong>thrive in a team environment</strong>.
    </p>
    <p>
      Take a look at my experience and skills below to learn more about the ways I've helped shape
      the digital landscape at GlobalLogic and how I can bring that same passion, expertise, and
      dedication to your team.
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
      <ToolingIcon />
    </template>
    <template #heading>Experience</template>
    <template v-for="item of cv.professional_experience" :key="item.period">
      <CVItem :item="item" />
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Recent Tech Experience</template>
    <ul class="my-2">
      <li v-for="(value, key) in cv.recent_tech_experience" :key="key" class="m-0">
        <strong class="strong">{{ key }}:</strong> <span>{{ value }}</span>
      </li>
    </ul>
  </WelcomeItem>
  <ToTop />
</template>
