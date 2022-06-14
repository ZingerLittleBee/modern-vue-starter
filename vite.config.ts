import viteStylelint from '@amatlash/vite-plugin-stylelint'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteEslint from 'vite-plugin-eslint'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        viteEslint(),
        viteStylelint({
            exclude: /windicss|node_modules/
        })
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, './src')
            }
        ]
    },
    test: {
        environment: 'jsdom'
    }
})
