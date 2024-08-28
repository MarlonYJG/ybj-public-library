/*
 * @Author: Marlon
 * @Date: 2024-08-28 09:23:48
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    minify: false,
    rollupOptions: {
      output:{
        entryFileNames:'[name].js',
        chunkFileNames:'[name].js',
        assetFileNames:'[name].[ext]'
      }
    }
  }
})
