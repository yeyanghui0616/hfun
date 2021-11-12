import { defineConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'
import { createSvg } from './src/icons/index'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), createSvg('./src/icons/svg/')],
  resolve: {
    alias: {
      '@': resolve("./src"),
    },
  },
  css: {
		//css预处理
		preprocessorOptions: {
      additionalData: '@import "@/styles/layout.scss";'
    }
  }
})
