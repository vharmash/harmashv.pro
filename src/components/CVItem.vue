<script lang="ts" setup>
import { toRef } from 'vue'

const dog = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const entry = toRef(dog, 'item')
</script>
<template v-if="entry">
  <div
    class="prose prose-stone !prose-invert prose-base max-w-none prose-li:my-0 hover:border-zinc-500 hover:shadow-sm px-4 py-2 mb-3 rounded-md border border-zinc-700"
  >
    <div class="flex items-center pb-2">
      <div class="md:pl-10 pr-4 grow">
        <h4 class="text-lg p-0 m-0 underline decoration-double decoration-amber-500">
          {{ entry.role }}
        </h4>
        <span class="font-light text-cyan-300/80">
          {{ entry.period }}
        </span>
      </div>
      <div class="font-semibold md:tracking-wider md:pr-10">
        <div class="font-semibold tracking-wider">
          {{ entry.company }}
        </div>
        <div class="font-light text-amber-300/80">
          {{ entry.industry }}
        </div>
      </div>
    </div>
    <div class="font-medium text-amber-50 pt-1 pr-2 mr-2">
      {{ entry.outline }}
    </div>
    <h5 class="italic font-light tracking-wider">Impact:</h5>
    <ul class="my-2">
      <li v-for="i in entry.impact" :key="i" class="p-0 m-0">
        {{ i }}
      </li>
    </ul>
    <h5 class="italic font-light tracking-wider">Responsibilities:</h5>
    <ul class="my-2">
      <li v-for="i in entry.responsibilities" :key="i" class="p-0 m-0">
        {{ i }}
      </li>
    </ul>
  </div>
</template>
