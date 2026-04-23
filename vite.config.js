import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/lab8/',
  plugins: [vue()],
  build: {
    outDir: 'docs'
  }
})