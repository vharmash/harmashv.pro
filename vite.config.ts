import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import VitePluginInjectPreload from 'vite-plugin-inject-preload'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: false,
    sourcemap: true
  },
  plugins: [
    vue(),
    imagetools({
      force: true
    }),
    VitePluginInjectPreload({
      files: [
        {
          match: /style-[a-z-0-9]*.(css)$/
        },
        {
          match: /index-[a-z-0-9]*.(js)$/,
          attributes: {
            rel: 'modulepreload',
            type: undefined
          }
        }
      ]
    })
  ]
})
