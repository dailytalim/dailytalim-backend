<template>
    <div class="hadith-container">
        <!-- Generated Image -->
        <div v-if="imageSrc" class="image-preview">
            <img
                :src="imageSrc"
                alt="Generated Hadith Image"
                class="m-4 rounded-lg border-4 border-white shadow-xl"
            />
        </div>

        <!-- Buttons -->
        <div v-if="imageSrc" class="mt-6 flex justify-center gap-4">
            <button
                @click="downloadImage"
                class="rounded-lg bg-gradient-to-r from-green-400 to-green-600 px-6 py-3 font-semibold text-white transition duration-300 hover:from-green-500 hover:to-green-700"
            >
                Download Image
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
        container.style.backgroundColor = '#fff9e6' // Light yellow background
        container.style.padding = '40px'
        container.style.borderRadius = '20px'
        container.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)' // Soft shadow for depth

        // Create header
        const header = document.createElement('div')
        header.style.fontSize = '24px'
        header.style.fontWeight = 'bold'
        header.style.marginBottom = '20px'
        header.style.color = '#2d3748' // Dark text for the header
        header.innerText = 'আজকের তালিম'

        // Create description
        const description = document.createElement('div')
        description.style.fontSize = '18px'
        description.style.color = '#4a5568' // Lighter gray text
        description.style.marginBottom = '20px'
        description.style.lineHeight = '1.5' // More spacious line height for readability
        description.innerHTML = props.hadith.description

        // Create footer
        const footer = document.createElement('div')
        footer.style.fontSize = '14px'
        footer.style.color = '#718096' // Light gray text
        footer.style.marginTop = '20px'
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

// Automatically generate the image on component mount
onMounted(() => {
    generateImage()
})
</script>

<style>
.hadith-container {
    text-align: center;
    padding: 50px;
    background-color: #f9fafb;
}

.image-preview {
    text-align: center;
    margin-top: 20px;
}
</style>
