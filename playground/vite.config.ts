import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import copyFiles from '../src'
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    copyFiles(),
  ],
  alias: {
    '@': '.',
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'Test',
      formats: ['cjs', 'es'],
    },
  },
})
