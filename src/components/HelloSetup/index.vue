<script setup lang="ts">
import { ref } from 'vue'
import ClickIcon from '~icons/ic/twotone-ads-click'

const count = ref(0)
</script>

<template>
    <div>
        <div>Hello Setup</div>
        <p>
            <span>current count: </span>
            <span class="underline decoration-sky-500">{{ count }}</span>
        </p>
        <button class="btn" @click="() => count++">
            <span class="flex flex-row justify-center items-center space-x-2"> <click-icon />Click Me </span>
        </button>
    </div>
</template>

<style scoped>
.btn {
    @apply py-2 px-4 rounded text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300;
}
</style>
