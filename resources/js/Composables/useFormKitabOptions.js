import { ref, watch, onMounted } from 'vue'

export function useFormKitabOptions(props, form) {
    const kitabOptions = ref([])
    const chapterOptions = ref([])

    // Helper to format options
    const formatOptions = (items, labelKey = 'name', valueKey = 'id') =>
        items.map((item) => ({
            label: item[labelKey],
            value: item[valueKey]
        }))

    // Find and set the selected value
    const preSelectValue = (options, value) => {
        return options.find((option) => option.value == value) || null
    }

    // Populate chapters based on the selected kitab
    const populateChapters = (kitabId) => {
        const kitab = props.kitabs.find((kitab) => kitab.id == kitabId)
        chapterOptions.value = formatOptions(kitab?.chapters || [])
    }

    // Initialize options based on existing form data
    const initializeOptions = () => {
        kitabOptions.value = formatOptions(props.kitabs)
        
        if (form.kitab_id) {
            form.kitab_id = preSelectValue(kitabOptions.value, form.kitab_id)
            if (form.kitab_id?.value) {
                populateChapters(form.kitab_id.value)
                chapterOptions.value = formatOptions(props.kitabs.find(k => k.id == form.kitab_id.value)?.chapters || [])
                form.chapter_id = preSelectValue(chapterOptions.value, form.chapter_id)
            }
        }
    }

    // Watch for changes in kitab selection and update chapter options accordingly
    watch(
        () => form.kitab_id,
        (newValue) => {
            form.chapter_id = null
            if (newValue?.value) {
                populateChapters(newValue.value)
                chapterOptions.value = formatOptions(props.kitabs.find(k => k.id == newValue.value)?.chapters || [])
                form.chapter_id = preSelectValue(chapterOptions.value, form.chapter_id)
            }
        }
    )

    // On mounted, initialize options
    onMounted(() => {
        initializeOptions()
    })

    return {
        kitabOptions,
        chapterOptions
    }
}
