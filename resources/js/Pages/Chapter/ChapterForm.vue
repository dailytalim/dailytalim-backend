<template>

    <Head :title="title"></Head>
    <AppSectionHeader :title="title" :bread-crumb="breadCrumb">
    </AppSectionHeader>

    <AppCard class="w-full md:w-3/4 xl:w-1/2">
        <template #title>
            {{ title }}
        </template>
        <template #content>
            <AppFormErrors class="mb-4" />
            <form class="flex flex-col gap-2">
                <div>
                    <p class="mb-1 mt-5">Kitab</p>
                    <AppCombobox v-model="form.kitab_id" :options="kitabs" combo-label="Select a Kitab"
                        class="w-full" />
                </div>
                <div>
                    <AppLabel for="name">{{ __('Name') }}</AppLabel>
                    <AppInputText id="name" v-model="form.name" type="text" :class="{
                        'input-error': errorsFields.includes('name')
                    }" />
                </div>

                <div class="mt-5 flex items-center">
                    <AppCheckbox id="active" v-model="form.active" name="active" :value="true" />
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
    chapter: {
        type: Object,
        default: null
    },
    kitabs: {
        type: Object,
        default: null
    }
})

const { title } = useTitle('Chapter')

const breadCrumb = [
    { label: 'Home', href: route('dashboard.index') },
    { label: 'Chapters', href: route('chapter.index') },
    { label: title, last: true }
]

const form = useForm({
    kitab_id: props.chapter ? props.chapter.kitab_id : '',
    name: props.chapter ? props.chapter.name : '',
    active: props.chapter ? props.chapter.active : true
})

onMounted(() => {
    if (form.kitab_id) {
        form.kitab_id = props.kitabs.find(
            (kitab) => kitab.value === form.kitab_id
        )
    }
})

const { isCreate } = useFormContext()

const getValueFromKey = (data, key) => data[key]?.value || null

const submitForm = () => {
    const postData = (data) => {
        const commonData = {
            ...data,
            kitab_id : getValueFromKey(data, 'kitab_id')
        }

        return isCreate.value ? commonData : { ...commonData, _method: 'PUT' }
    }

    if (isCreate.value) {
        form.transform(postData).post(route('chapter.store'))
    } else {
        form.transform(postData).post(route('chapter.update', props.chapter.id))
    }
}

const { errorsFields } = useFormErrors()
</script>
