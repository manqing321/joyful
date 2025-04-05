import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {	// 配置别名 @ 等同于项目文件的 src
      '@': path.resolve(__dirname, 'src')
    }
  }
})
