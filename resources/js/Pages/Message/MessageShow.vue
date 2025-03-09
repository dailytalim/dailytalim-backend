<template>
    <Head :title="title"></Head>

    <!-- Header Section -->
    <AppSectionHeader :title="title" :bread-crumb="breadCrumb" />

    <AppButton
        class="btn btn-primary flex items-center gap-2"
        @click="$inertia.visit(route('message.index'))"
    >
        <i class="ri-arrow-left-line"></i> Back
    </AppButton>

    <!-- Message Card -->
    <AppCard
        class="w-full rounded-lg border border-gray-300 bg-white shadow-sm"
    >
        <template #title>
            <div class="flex items-center justify-between">
                <h2 class="text-xl font-bold text-gray-800">
                    <span class="text-blue-600">{{ message.subject }}</span>
                </h2>
            </div>
        </template>

        <template #content>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <!-- Subject -->
                <div>
                    <h3 class="text-sm font-semibold text-gray-500">Name:</h3>
                    <p class="text-base text-gray-800">{{ message.name }}</p>
                </div>

                <!-- Phone -->
                <div>
                    <h3 class="text-sm font-semibold text-gray-500">Phone:</h3>
                    <p class="text-base text-gray-800">{{ message.phone }}</p>
                </div>

                <!-- Email -->
                <div>
                    <h3 class="text-sm font-semibold text-gray-500">Email:</h3>
                    <p class="text-base text-blue-600">
                        <a
                            :href="`mailto:${message.email}`"
                            class="hover:underline"
                        >
                            {{ message.email }}
                        </a>
                    </p>
                </div>

                <!-- Date -->
                <div>
                    <h3 class="text-sm font-semibold text-gray-500">Date:</h3>
                    <p class="text-base text-gray-800">
                        {{ message.created_at }}
                    </p>
                </div>

                <!-- Message Content -->
                <div class="col-span-full">
                    <h3 class="text-sm font-semibold text-gray-500">
                        Message:
                    </h3>
                    <p class="text-base leading-relaxed text-gray-800">
                        {{ message.message }}
                    </p>
                </div>
            </div>
        </template>

        <template #footer>
            <div class="mt-4 flex justify-end gap-4">
                <!-- Delete Button -->
                <AppTooltip v-if="can('message-delete')" text="Delete">
                    <AppButton
                        class="btn btn-icon btn-destructive flex items-center gap-2"
                        @click="
                            confirmDelete(route('message.destroy', message.id))
                        "
                    >
                        <i class="ri-delete-bin-line"></i> Delete
                    </AppButton>
                </AppTooltip>
            </div>
        </template>
    </AppCard>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3'
import { Head } from '@inertiajs/vue3'
import useTitle from '@/Composables/useTitle'
import useFormErrors from '@/Composables/useFormErrors'
import useAuthCan from '@/Composables/useAuthCan'

const { can } = useAuthCan()

const props = defineProps({
    message: {
        type: Object,
        default: null
    }
})

const { title } = useTitle('Message')

const breadCrumb = [
    { label: 'Home', href: route('dashboard.index') },
    { label: 'Messages', href: route('message.index') },
    { label: title, last: true }
]

const confirmDelete = (url) => {
    if (confirm('Are you sure you want to delete this message?')) {
        useForm().delete(url, {
            onSuccess: () => {
                alert('Message deleted successfully!')
            }
        })
    }
}

const { errorsFields } = useFormErrors()
</script>

<style scoped>
/* Custom styles for improved aesthetics */
.text-blue-600:hover {
    color: #2563eb;
}

.shadow-sm {
    box-shadow:
        0 1px 2px rgba(0, 0, 0, 0.05),
        0 1px 1px rgba(0, 0, 0, 0.1);
}

.border-gray-300 {
    border-color: #d1d5db;
}
</style>
