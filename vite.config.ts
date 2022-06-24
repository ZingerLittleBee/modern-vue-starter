import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteEslint from 'vite-plugin-eslint'
import viteStylelint from '@amatlash/vite-plugin-stylelint'
import { defineConfig } from 'vitest/config'
import Icons from 'unplugin-icons/vite'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        vue(),
        Icons({}),
        vueJsx({}),
        viteEslint(),
        viteStylelint({
            exclude: /tailwindcss|node_modules/
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
