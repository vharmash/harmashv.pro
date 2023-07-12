<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="">
    <nav class="flex w-full items-center place-content-end px-2 text-base pb-2">
      <RouterLink to="/" class="hover:bg-zinc-600 hover:text-white hover:shadow-md p-4 w-32 text-center active:border-b hover:border-b border-amber-600" >Home</RouterLink>
      <RouterLink to="/cv" class="hover:bg-zinc-600 hover:text-white hover:shadow-md p-4 w-32 text-center active:border-b hover:border-b border-amber-600">CV</RouterLink>
    </nav>

    <img alt="Vue logo" class="" src="@/assets/logo.svg" width="125" height="125" />

    <div class="">
      <HelloWorld/>
    </div>
  </header>

  <RouterView />
</template>