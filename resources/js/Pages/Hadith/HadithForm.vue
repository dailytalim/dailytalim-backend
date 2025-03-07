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
            <form class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                    <AppLabel for="kitab_id">{{ __('Kitab') }}</AppLabel>
                    <AppCombobox
                        v-model="form.kitab_id"
                        :options="kitabOptions"
                        combo-label="Select a Kitab"
                        class="w-full"
                    />
                </div>

                <div>
                    <AppLabel for="chapter_id">{{ __('Chapter') }}</AppLabel>
                    <AppCombobox
                        v-model="form.chapter_id"
                        :options="chapterOptions"
                        combo-label="Select a Chapter"
                        class="w-full"
                    />
                </div>

                <div>
                    <AppLabel for="hadith_no">{{
                        __('Hadith Number')
                    }}</AppLabel>
                    <AppInputText
                        id="hadith_no"
                        v-model="form.hadith_no"
                        type="text"
                        :class="{
                            'input-error': errorsFields.includes('hadith_no')
                        }"
                    />
                </div>

                <div class="mt-5 flex items-center">
                    <AppCheckbox
                        id="active"
                        v-model="form.active"
                        name="active"
                        :value="true"
                    />
                    <AppLabel for="active" class="ml-3"> Active </AppLabel>
                </div>

                <div class="md:col-span-2">
                    <AppLabel for="ar">Arabic</AppLabel>
                    <AppTipTapEditor
                        v-model="form.ar"
                        editor-id="ar"
                        :class="{
                            'app-tip-tap-error': errorsFields.includes('ar')
                        }"
                        :file-upload-url="route('hadith.uploadEditorImage')"
                    />
                </div>

                <div class="md:col-span-2">
                    <AppLabel for="bn">Bangla</AppLabel>
                    <AppTipTapEditor
                        v-model="form.bn"
                        editor-id="bn"
                        :class="{
                            'app-tip-tap-error': errorsFields.includes('bn')
                        }"
                        :file-upload-url="route('hadith.uploadEditorImage')"
                    />
                </div>

                <div class="md:col-span-2">
                    <AppLabel for="en">English</AppLabel>
                    <AppTipTapEditor
                        v-model="form.en"
                        editor-id="en"
                        :class="{
                            'app-tip-tap-error': errorsFields.includes('en')
                        }"
                        :file-upload-url="route('hadith.uploadEditorImage')"
                    />
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
import { useFormKitabOptions } from '@/Composables/useFormKitabOptions'

const props = defineProps({
    hadith: {
        type: Object,
        default: null
    },
    kitabs: {
        type: Object,
        default: null
    }
})

const { title } = useTitle('hadith')

const breadCrumb = [
    { label: 'Home', href: route('dashboard.index') },
    { label: 'Hadiths', href: route('hadith.index') },
    { label: title, last: true }
]

const form = useForm({
    kitab_id: props.hadith ? props.hadith.kitab_id : '',
    chapter_id: props.hadith ? props.hadith.chapter_id : '',
    hadith_no: props.hadith ? props.hadith.hadith_no : '',
    active: props.hadith ? props.hadith.active : true,
    ar: props.hadith ? props.hadith.ar : '',
    bn: props.hadith ? props.hadith.bn : '',
    en: props.hadith ? props.hadith.en : ''
})

const { kitabOptions, chapterOptions } = useFormKitabOptions(props, form)

const { isCreate } = useFormContext()

const getValueFromKey = (data, key) => data[key]?.value || null

const submitForm = () => {
    const postData = (data) => {
        const commonData = {
            ...data,
            kitab_id: getValueFromKey(data, 'kitab_id'),
            chapter_id: getValueFromKey(data, 'chapter_id')
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
