<template>
    <div class="hadith-container">
        <!-- Text Element -->
        <div
            ref="textElement"
            class="text-md mb-16 font-normal text-gray-600 md:text-xl"
        >
            {{ hadith.description }}
        </div>

        <!-- Generated Image -->
        <img
            v-if="imageSrc"
            :src="imageSrc"
            alt="Generated Hadith Image"
            class="m-4 rounded shadow-lg"
        />

        <!-- Buttons -->
        <div class="mt-6 flex gap-4">
            <button
                @click="generateImage"
                class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
                Generate Image
            </button>
            <button
                v-if="imageSrc"
                @click="downloadImage"
                class="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
                Download Image
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import html2canvas from 'html2canvas'

const props = defineProps({
    hadith: {
        type: Object,
        default: () => ({ description: 'No description available.' })
    }
})

const textElement = ref(null)
const imageSrc = ref(null)

const generateImage = async () => {
    if (!textElement.value) return

    try {
        const canvas = await html2canvas(textElement.value, {
            backgroundColor: '#f3f4f6' // Light gray background
        })
        imageSrc.value = canvas.toDataURL('image/png')
    } catch (error) {
        console.error('Error generating image:', error)
    }
}

const downloadImage = () => {
    if (!imageSrc.value) return

    const link = document.createElement('a')
    link.href = imageSrc.value
    link.download = 'hadith-image.png'
    link.click()
}
</script>

<style>
.hadith-container {
    text-align: center;
    padding: 50px;
    background-color: #ffffff;
}
</style>
