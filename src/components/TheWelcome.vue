<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import GreetingIcon from './icons/IconGreeting.vue'
import ToolingIcon from './icons/IconTooling.vue'
import LinkedInIcon from './icons/IconLinkedIn.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <GreetingIcon />
    </template>
    <template #heading>Introduction</template>
    <p>
      Hello, I'm Volodymyr, a seasoned IT professional with over a decade of experience immersed in various facets of
      technology. I hold a demonstrated history of successfully navigating the Linux environment, designing efficient QoL
      scripts using Python, and streamlining operations using a plethora of tools including JavaScript, Groovy, Jenkins,
      GIT/Gerrit, and more.
    </p>

    <p>
      Throughout my career, I've established a reputation for my strong troubleshooting capabilities, rapid
      decision-making
      skills, and an unwavering commitment to client satisfaction and quality. Not only do I have a deep technical
      expertise, but I also take pride in my capacity for rapid learning and self-improvement.
    </p>

    <p>
      Having worked at GlobalLogic in a range of roles, I have mastered the art of handling complex multi-component
      systems,
      resolving user-generated issues, driving automation for bulk tasks, and providing mentorship and support to teams.
      I'm also quite familiar with creating interactive user interfaces using modern technologies like VUE and Tailwind
      CSS.
    </p>

    <p>
      In addition to my professional achievements, I bring a set of personal attributes that further enhance my value.
      I'm ambitious, detail-oriented, and passionate, always seeking perfection in my endeavors. I understand the
      importance of communication and thrive in a team environment.
    </p>
    <p>
    Take a look at my experience and skills below to learn more about the ways I've helped shape the digital landscape at
    GlobalLogic and how I can bring that same passion, expertise, and dedication to your team.
    </p>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Experience</template>


  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>

</template>
