<template>
    <div class="hadith-container">
        <!-- Generated Image -->
        <div v-if="imageSrc" class="image-preview">
            <img
                :src="imageSrc"
                alt="Generated Hadith Image"
                class="m-4 rounded shadow-lg"
            />
        </div>

        <!-- Buttons -->
        <div v-if="imageSrc" class="mt-6 flex justify-center gap-4">
            <button
                @click="downloadImage"
                class="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
                Download Image
            </button>
            <button
                @click="shareImage"
                class="rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
            >
                Share on Social Media
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import html2canvas from 'html2canvas'

const props = defineProps({
    hadith: {
        type: Object,
        default: () => ({ description: 'No description available.' })
    }
})

const imageSrc = ref(null)

const generateImage = async () => {
    try {
        // Create a container element for the header, description, and footer
        const container = document.createElement('div')
        container.style.position = 'absolute'
        container.style.left = '-9999px' // Hide it off-screen
        container.style.width = '1000px'
        container.style.fontFamily = 'Arial, sans-serif'
        container.style.textAlign = 'center'
        container.style.backgroundColor = '#f3f4f6' // Light gray background
        container.style.padding = '20px'
        container.style.borderRadius = '8px'

        // Create header
        const header = document.createElement('div')
        header.style.fontSize = '20px'
        header.style.fontWeight = 'bold'
        header.style.marginBottom = '10px'
        header.innerText = 'আজকের তালিম'

        // Create description
        const description = document.createElement('div')
        description.style.fontSize = '16px'
        description.style.color = '#1f2937' // Dark gray text
        description.style.marginBottom = '10px'
        description.innerHTML = props.hadith.description

        // Create footer
        const footer = document.createElement('div')
        footer.style.fontSize = '14px'
        footer.style.color = '#6b7280' // Gray text
        footer.style.marginTop = '10px'
        footer.innerText = 'www.dailytalim.com, fb.com/DailyTalimBD'

        // Append header, description, and footer to the container
        container.appendChild(header)
        container.appendChild(description)
        container.appendChild(footer)

        // Append the container to the body
        document.body.appendChild(container)

        // Generate the image using html2canvas
        const canvas = await html2canvas(container)
        imageSrc.value = canvas.toDataURL('image/png')

        // Remove the container
        document.body.removeChild(container)
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

const shareImage = async () => {
    if (!imageSrc.value) return

    try {
        if (navigator.share) {
            const response = await fetch(imageSrc.value)
            const blob = await response.blob()
            const file = new File([blob], 'hadith-image.png', {
                type: blob.type
            })

            await navigator.share({
                title: 'Hadith Image',
                text: 'Check out this Hadith:',
                files: [file]
            })
        } else {
            // Fallback: Copy text or provide manual sharing instructions
            alert(
                'Sharing is not supported on this device. You can download the image and share it manually.'
            )
        }
    } catch (error) {
        console.error('Error sharing the image:', error)
    }
}

// Automatically generate the image on component mount
onMounted(() => {
    generateImage()
})
</script>

<style>
.hadith-container {
    text-align: center;
    padding: 50px;
    background-color: #ffffff;
}

.image-preview {
    text-align: center;
    margin-top: 20px;
}
</style>
