<template>
  <transition name="fade">
    <div
      v-show="visible"
      class="vue-back-to-top cursor-pointer fixed z-[1000] py-2 rounded-md border border-amber-500 bg-zinc-800/50 blend-screen rounded-md shadow-sm"
      :style="`bottom:${bottom};right:${right};`"
      @click="backToTop"
    >
      <slot>
        <div class="default bg-primary text-slate-50 font-bold text-2xl text-center py-1 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
      </slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'

export default defineComponent({
  name: 'vue-go-top',
  props: {
    text: {
      type: String,
      default: '&uarr;'
    },
    visibleOffset: {
      type: [String, Number],
      default: 300
    },
    visibleOffsetBottom: {
      type: [String, Number],
      default: 0
    },
    right: {
      type: String,
      default: '2rem'
    },
    bottom: {
      type: String,
      default: '3rem'
    }
  },
  setup(props, context) {
    const visible = ref(false)

    const scrollToTop = () => {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTop)
        window.scrollTo(0, Math.floor(currentScroll - currentScroll / 5))
      }
    }

    const catchScroll = () => {
      const pastTopOffset = window.scrollY > parseInt(String(props.visibleOffset))
      const pastBottomOffset =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - parseInt(String(props.visibleOffsetBottom))
      visible.value =
        parseInt(String(props.visibleOffsetBottom)) > 0
          ? pastTopOffset && !pastBottomOffset
          : pastTopOffset
    }

    onMounted(() => {
      // https://www.benmarshall.me/attaching-javascript-handlers-to-scroll-events/
      document.addEventListener('wheel', catchScroll)
    })

    onUnmounted(() => {
      document.removeEventListener('wheel', catchScroll)
    })

    const backToTop = () => {
      scrollToTop()
      context.emit('scrolled')
    }

    return {
      visible,
      backToTop
    }
  },
  emits: ['scrolled']
})
</script>

<style scoped>
/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(20px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>
