<template>
    <Head :title="title"></Head>
    <AppSectionHeader :title="title" :bread-crumb="breadCrumb">
    </AppSectionHeader>

    <AppCard class="w-full">
        <template #title>
            {{ title }}
        </template>
        <template #content>
            <AppFormErrors class="mb-4" />
            <form class="flex flex-col gap-2">
                <div>
                    <AppLabel for="description">Description</AppLabel>
                    <AppTipTapEditor
                        v-model="form.description"
                        editor-id="description"
                        :class="{
                            'app-tip-tap-error':
                                errorsFields.includes('description')
                        }"
                        :file-upload-url="route('hadith.uploadEditorImage')"
                    />
                </div>

                <!-- <div>
                    <AppLabel for="description">
                        {{ __('Description') }}
                    </AppLabel>

                    <AppTextArea
                        id="description"
                        v-model="form.description"
                        type="text"
                        :class="{
                            'input-error': errorsFields.includes('description')
                        }"
                        placeholder="Description"
                    />
                </div> -->

                <div class="mt-5 flex items-center">
                    <AppCheckbox
                        id="active"
                        v-model="form.active"
                        name="active"
                        :value="true"
                    />
                    <AppLabel for="active" class="ml-3"> Active </AppLabel>
                </div>
            </form>
        </template>
        <template #footer>
            <AppButton class="btn btn-primary" @click="submitForm">
                {{ __('Save') }}
            </AppButton>
        </template>
    </AppCard>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3'
import { Head } from '@inertiajs/vue3'
import useTitle from '@/Composables/useTitle'
import useFormContext from '@/Composables/useFormContext'
import useFormErrors from '@/Composables/useFormErrors'
import { onMounted } from 'vue'

const props = defineProps({
    hadith: {
        type: Object,
        default: null
    }
})

const { title } = useTitle('hadith')

const breadCrumb = [
    { label: 'Home', href: route('dashboard.index') },
    { label: 'hadiths', href: route('hadith.index') },
    { label: title, last: true }
]

const form = useForm({
    description: props.hadith ? props.hadith.description : '',
    active: props.hadith ? props.hadith.active : ''
})

const { isCreate } = useFormContext()

const submitForm = () => {
    const postData = (data) => {
        const commonData = {
            ...data
        }

        return isCreate.value ? commonData : { ...commonData, _method: 'PUT' }
    }

    if (isCreate.value) {
        form.transform(postData).post(route('hadith.store'))
    } else {
        form.transform(postData).post(route('hadith.update', props.hadith.id))
    }
}

const { errorsFields } = useFormErrors()
</script>
