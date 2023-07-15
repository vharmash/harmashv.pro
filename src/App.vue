<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IconFlag from './components/icons/IconFlag.vue'
import IconLinkedIn from './components/icons/IconLinkedIn.vue'
</script>

<template>
  <header class="">
    <nav
      class="grid grid-flow-col w-full items-center place-content-end px-2 text-base border-b border-amber-600"
    >
      <RouterLink
        to="/"
        class="hover:bg-zinc-600 hover:text-white hover:shadow-md p-3 w-32 text-center"
      >
        Home
      </RouterLink>
      <RouterLink
        to="/cv"
        class="hover:bg-zinc-600 hover:text-white hover:shadow-md p-3 w-32 text-center"
      >
        CV
      </RouterLink>
      <a
        href="https://www.linkedin.com/in/volodymyr-harmash/"
        target="_blank"
        rel="noopener nofollow noreferrer"
        class="hover:bg-zinc-600 hover:text-white hover:shadow-md p-3 text-center"
      >
        <IconLinkedIn />
      </a>
    </nav>
    <div class="">
      <div class="pt-6 pb-8 w-full flex items-center place-content-evenly">
        <div>
          <h1 class="text-2xl lg:text-4xl font-mono font-semibold py-2">Volodymyr Harmash</h1>
          <h2 class="text-lg font-mono text-cyan-300">Senior Engineer, Support</h2>
        </div>
        <div>
          <img
            src="/facepic.png"
            alt="Profile Pic"
            height="200"
            width="200"
            class="w-36 lg:w-48"
          />
        </div>
      </div>
    </div>
  </header>

  <RouterView />

  <div class="inset-x-0 bottom-4 pt-8 lg:pt-10 pb-3 text-xs text-center text-zinc-500">
    <div class="flex items-center place-content-center pb-2">      <a
          href="https://www.linkedin.com/in/volodymyr-harmash/"
          target="_blank"
          rel="noopener nofollow noreferrer"
          class="hover:bg-zinc-600 hover:text-white hover:shadow-md p-1 text-center rounded-md"
        >
          <IconLinkedIn />
        </a></div>
    <a
      href="https://github.com/vharmash/harmashv.pro"
      target="_blank"
      rel="noopener nofollow noreferrer"
      class="underline hover:text-neutral-400"
      >Harmash V &copy; Kyiv, Ukraine<br />
      2023</a
    >
    <div class="inset-x-0 bottom-4 mx-auto w-5 h-5">
      <IconFlag />
    </div>
  </div>
</template>
