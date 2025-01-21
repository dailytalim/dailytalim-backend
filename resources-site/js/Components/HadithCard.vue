<template>
    <div class="items-center justify-center min-h-screen bg-gradient-to-r flex flex-col">
        <div ref="cardRef"
            class="container max-w-2xl rounded-lg bg-white shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-3xl">
            <!-- Header -->
            <div class="header bg-gradient-to-r from-green-600 to-emerald-500 text-white p-4 text-center">
                <h2 class="text-3xl font-bold tracking-wide">আজকের তালিম</h2>
            </div>

            <!-- Content -->
            <div class="content p-4">
                <p v-html="hadith.description" class="text-gray-700 text-base leading-relaxed text-justify"></p>
            </div>

            <!-- Footer -->
            <div class="footer bg-gray-50 border-t border-gray-200 px-8 py-4 flex justify-between items-center">
                <p class="text-green-600 font-semibold text-sm hover:text-green-700 transition">
                    <i class="ri-book-open-line"></i> Daily Talim | <i class="ri-global-line"></i> dailytalim.com |
                    <i class="ri-facebook-fill"></i>/DailyTalimBD
                </p>
            </div>
        </div>

        <div class="flex gap-4 items-center">
            <!-- Download Button -->
            <div class="mt-4">
                <button @click="downloadCard"
                    class="rounded-md bg-green-500 text-white px-4 py-2 font-semibold shadow-md hover:bg-green-600 transition">
                    <i class="ri-download-2-line"></i>
                    Download
                </button>
            </div>

            <!-- Share Button -->
            <!-- <div class="mt-4">
                <button @click="downloadCard"
                    class="rounded-md bg-green-500 text-white px-4 py-2 font-semibold shadow-md hover:bg-green-600 transition">
                    <i class="ri-share-line"></i>
                    Share
                </button>
            </div> -->
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import html2canvas from 'html2canvas';

const props = defineProps({
    hadith: {
        type: Object,
        default: () => ({
            description: 'No description available.',
            date: 'N/A',
        }),
    },
});

const cardRef = ref(null);

const downloadCard = async () => {
    try {
        if (!cardRef.value) return;

        // Generate canvas from the card
        const canvas = await html2canvas(cardRef.value);

        // Convert canvas to image
        const image = canvas.toDataURL('image/png');

        // Create a temporary link to trigger download
        const link = document.createElement('a');
        link.href = image;
        link.download = 'daily-talim-card.png';
        link.click();
    } catch (error) {
        console.error('Error downloading the card:', error);
    }
};
</script>

<style>
/* Add additional styles if needed */
</style>
