<script setup lang="ts">
import HelloSetup from '@/components/HelloSetup/index.vue'
import HelloJSX from '@/components/HelloJSX'
</script>

<template>
    <div class="app">
        <div class="app__title">modern-vue-starter</div>
        <div class="app__content">
            <HelloSetup />
            <HelloJSX />
        </div>
    </div>
</template>

<style scoped>
.app {
    @apply w-screen h-screen flex flex-col justify-center items-center;
}

.app__title {
    @apply flex-1 flex place-items-center text-6xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500;
}

.app__content {
    @apply flex-1 flex flex-row justify-center items-center items-baseline space-x-24;
}
</style>
