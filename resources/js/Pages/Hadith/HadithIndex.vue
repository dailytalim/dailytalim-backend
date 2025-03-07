<template>
    <Head :title="title"></Head>
    <AppSectionHeader :title="title" :bread-crumb="breadCrumb">
        <template #right>
            <div class="flex gap-2">
                <AppButton
                    v-if="can('hadith-create')"
                    class="btn btn-primary"
                    @click="$inertia.visit(route('hadith.create'))"
                >
                    <i class="ri-add-fill mr-1"></i>
                    Add hadith
                </AppButton>

                <AppButton
                    v-if="can('hadith-recycle-bin-list')"
                    class="btn btn-secondary"
                    @click="$inertia.visit(route('hadith.recycleBin.index'))"
                >
                    <i class="ri-recycle-line mr-1"></i>
                    Recycle Bin
                </AppButton>
            </div>
        </template>
    </AppSectionHeader>
    <AppDataSearch
        v-if="hadiths.data.length || route().params.searchTerm"
        :url="route('hadith.index')"
        fields-to-search="name"
    ></AppDataSearch>
    <AppDataTable v-if="hadiths.data.length" :headers="headers">
        <template #TableBody>
            <tbody>
                <AppDataTableRow
                    v-for="(item, index) in hadiths.data"
                    :key="item.id"
                >
                    <AppDataTableData>
                        {{
                            (hadiths.current_page - 1) * hadiths.per_page +
                            (index + 1)
                        }}
                    </AppDataTableData>

                    <AppDataTableData>
                        {{ item.kitab?.name ?? '-' }}
                    </AppDataTableData>

                    <AppDataTableData>
                        {{ item.chapter?.name ?? '-' }}
                    </AppDataTableData>

                    <AppDataTableData>
                        {{ item.hadith_no ?? '-' }}
                    </AppDataTableData>

                    <AppDataTableData>
                        {{ item.bn }}
                    </AppDataTableData>

                    <AppDataTableData>
                        {{ item.view_count ?? '-' }}
                    </AppDataTableData>

                    <AppDataTableData>
                        <span
                            class="rounded px-3 py-1 text-sm"
                            :class="getStatusClass(item.active)"
                        >
                            {{ item.active ? 'Active' : 'Inactive' }}
                        </span>
                    </AppDataTableData>

                    <AppDataTableData>
                        <!-- Edit -->
                        <AppTooltip
                            v-if="can('hadith-edit')"
                            text="Edit"
                            class="mr-2"
                        >
                            <AppButton
                                class="btn btn-icon btn-primary"
                                @click="
                                    $inertia.visit(
                                        route('hadith.edit', item.id)
                                    )
                                "
                            >
                                <i class="ri-edit-line"></i>
                            </AppButton>
                        </AppTooltip>

                        <!-- Delete -->
                        <AppTooltip v-if="can('hadith-delete')" text="Delete">
                            <AppButton
                                class="btn btn-icon btn-destructive"
                                @click="
                                    confirmDelete(
                                        route('hadith.destroy', item.id)
                                    )
                                "
                            >
                                <i class="ri-delete-bin-line"></i>
                            </AppButton>
                        </AppTooltip>
                    </AppDataTableData>
                </AppDataTableRow>
            </tbody>
        </template>
    </AppDataTable>

    <AppPaginator
        :links="hadiths.links"
        :from="hadiths.from ?? 0"
        :to="hadiths.to ?? 0"
        :total="hadiths.total ?? 0"
        class="mt-4 justify-center"
    ></AppPaginator>

    <AppAlert v-if="!hadiths.data.length" class="mt-4">
        No data found.
    </AppAlert>

    <AppConfirmDialog ref="confirmDialogRef"></AppConfirmDialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Head } from '@inertiajs/vue3'
import useTitle from '@/Composables/useTitle'
import useAuthCan from '@/Composables/useAuthCan'

const { title } = useTitle('Hadiths')
const { can } = useAuthCan()

const props = defineProps({
    hadiths: {
        type: Object,
        default: () => {}
    }
})

const getStatusClass = (status) => {
    return status == true ? 'active' : 'inactive'
}

const breadCrumb = [
    { label: 'Home', href: route('dashboard.index') },
    { label: title, last: true }
]

const headers = [
    'SL',
    'Kitab',
    'Chapter',
    'No',
    'Hadith',
    'Views',
    'Status',
    'Actions'
]

const confirmDialogRef = ref(null)
const confirmDelete = (deleteRoute) => {
    confirmDialogRef.value.openModal(deleteRoute)
}
</script>
