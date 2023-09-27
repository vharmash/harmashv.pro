import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import UnpluginInjectPreload from 'unplugin-inject-preload/vite'
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
