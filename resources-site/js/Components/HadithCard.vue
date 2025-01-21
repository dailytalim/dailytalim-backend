<template>
    <div class="flex items-center justify-center min-h-screen bg-gradient-to-r ">
        <div class="container max-w-xl rounded-lg bg-white shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-3xl">
            <!-- Header -->
            <div class="header bg-gradient-to-r from-green-600 to-emerald-500 text-white p-4 text-center">
                <h2 class="text-3xl font-bold tracking-wide">আজকের তালিম</h2>
                <!-- <p class="mt-2 text-sm font-medium opacity-90">Date and Day</p> -->
            </div>

            <!-- Content -->
            <div class="content px-8 py-6">
                <div class="content mt-4">
                <p v-html="hadith.description" class="text-gray-700 text-base leading-relaxed text-justify"></p>
            </div>
            </div>

            <!-- Footer -->
            <div class="footer bg-gray-50 border-t border-gray-200 px-8 py-4 flex justify-between items-center">
                <!-- <p class="text-sm text-gray-500">Date: {{ hadith.date }}</p> -->
                <p class="text-green-600 font-semibold text-sm hover:text-green-700 transition">
                    <i class="ri-book-open-line "></i> Daily Talim | <i class="ri-global-line "></i> dailytalim.com | <i class="ri-facebook-fill "></i>/DailyTalimBD
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    hadith: {
        type: Object,
        default: () => ({
            description: 'No description available.',
            date: 'N/A',
        }),
    },
});
</script>
