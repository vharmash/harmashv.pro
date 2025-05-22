import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import UnpluginInjectPreload from 'unplugin-inject-preload/vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: false,
    sourcemap: false
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
    imagetools({}),
    UnpluginInjectPreload({
      files: [
        {
          outputMatch: /style-[a-z-0-9]*.(css)$/
        },
        {
          outputMatch: /index-[a-z-0-9]*.(js)$/,
          attributes: {
            rel: 'modulepreload',
            type: undefined
          }
        }
      ]
    })
  ]
})
