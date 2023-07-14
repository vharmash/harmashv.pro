<template>
  <div class="prose prose-zinc !prose-invert max-w-none item">
    <div class="flex gap-2">
      <div class="">
        <i class="flex items-center place-content-center place-items-center w-8 h-8">
          <slot name="icon"></slot>
        </i>
      </div>
      <div>
        <h3 class="p-0 m-0">
          <slot name="heading"></slot>
        </h3>
      </div>
    </div>
    <div class="details">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>

</style>