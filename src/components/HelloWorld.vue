<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
const count = ref(0)
</script>

<template>
    <div class="hw-container">
        <div
            class="mb-10 text-6xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
        >
            {{ msg }}
        </div>

        <p>
            <span>current count: </span>
            <span class="underline decoration-sky-500">{{ count }}</span>
        </p>
        <button class="btn" @click="() => count++">Click Me</button>
    </div>
</template>

<style scoped>
.hw-container {
    @apply h-screen w-screen flex flex-col justify-center items-center space-y-4;
}

.btn {
    @apply py-2 px-4 rounded text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300;
}
</style>
