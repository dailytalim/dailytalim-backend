<template>
    <Head :title="title"></Head>
    <AppSectionHeader :title="title" :bread-crumb="breadCrumb">
        <template #right>
            <div class="flex gap-2">
                <AppButton
                    v-if="can('chapter-create')"
                    class="btn btn-primary"
                    @click="$inertia.visit(route('chapter.create'))"
                >
                    <i class="ri-add-fill mr-1"></i>
                    Add chapter
                </AppButton>

                <AppButton
                    v-if="can('chapter-recycle-bin-list')"
                    class="btn btn-secondary"
                    @click="$inertia.visit(route('chapter.recycleBin.index'))"
                >
                    <i class="ri-recycle-line mr-1"></i>
                    Recycle Bin
                </AppButton>
            </div>
        </template>
    </AppSectionHeader>
    <AppDataSearch
        v-if="chapters.data.length || route().params.searchTerm"
        :url="route('chapter.index')"
        fields-to-search="name"
    ></AppDataSearch>
    <AppDataTable v-if="chapters.data.length" :headers="headers">
        <template #TableBody>
            <tbody>
                <AppDataTableRow
                    v-for="(item, index) in chapters.data"
                    :key="item.id"
                >
                    <AppDataTableData>
                        {{
                            (chapters.current_page - 1) * chapters.per_page +
                            (index + 1)
                        }}
                    </AppDataTableData>

                    <AppDataTableData>
                        {{ item.kitab?.name ?? '-' }}
                    </AppDataTableData>

                    <AppDataTableData>
                        {{ item.name }}
                    </AppDataTableData>

                    <AppDataTableData>
                        {{ item.hadiths }}
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
                            v-if="can('chapter-edit')"
                            text="Edit"
                            class="mr-2"
                        >
                            <AppButton
                                class="btn btn-icon btn-primary"
                                @click="
                                    $inertia.visit(
                                        route('chapter.edit', item.id)
                                    )
                                "
                            >
                                <i class="ri-edit-line"></i>
                            </AppButton>
                        </AppTooltip>

                        <!-- Delete -->
                        <AppTooltip v-if="can('chapter-delete')" text="Delete">
                            <AppButton
                                class="btn btn-icon btn-destructive"
                                @click="
                                    confirmDelete(
                                        route('chapter.destroy', item.id)
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
        :links="chapters.links"
        :from="chapters.from ?? 0"
        :to="chapters.to ?? 0"
        :total="chapters.total ?? 0"
        class="mt-4 justify-center"
    ></AppPaginator>

    <AppAlert v-if="!chapters.data.length" class="mt-4">
        No data found.
    </AppAlert>

    <AppConfirmDialog ref="confirmDialogRef"></AppConfirmDialog>
</template>

<script setup>
import { ref } from 'vue'
import { Head } from '@inertiajs/vue3'
import useTitle from '@/Composables/useTitle'
import useAuthCan from '@/Composables/useAuthCan'

const { title } = useTitle('Chapters')
const { can } = useAuthCan()

const props = defineProps({
    chapters: {
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

const headers = ['SL', 'Kitab Name', 'Chapter Name', 'Hadiths', 'Status', 'Actions']

const confirmDialogRef = ref(null)
const confirmDelete = (deleteRoute) => {
    confirmDialogRef.value.openModal(deleteRoute)
}
</script>
