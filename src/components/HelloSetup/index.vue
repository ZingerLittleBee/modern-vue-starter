<script setup lang="ts">
import { ref } from 'vue'
import ClickIcon from '~icons/ic/twotone-ads-click'

const count = ref(0)
</script>

<template>
    <div class="setup">
        <div class="h1">Hello Setup</div>
        <p class="mb-2">
            <span>count: </span>
            <span class="underline decoration-sky-500">{{ count }}</span>
        </p>
        <button class="btn" @click="() => count++">
            <span class="flex flex-row justify-center items-center space-x-2"> <click-icon />Click Me </span>
        </button>
    </div>
</template>

<style scoped>
.setup {
    @apply flex flex-col justify-center items-center;
}
</style>
