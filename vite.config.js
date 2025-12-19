import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: '/brianokinyi.github.io/',
  publicPath: process.env.NODE_ENV === "production" ? "/brianokinyi.github.io/" : "/",
})
