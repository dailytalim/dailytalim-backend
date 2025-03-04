<template>
    <Head :title="title"></Head>
    <AppSectionHeader :title="title" :bread-crumb="breadCrumb">
        <template #right>
            <div class="flex gap-2">
                <AppButton
                    v-if="can('kitab-create')"
                    class="btn btn-primary"
                    @click="$inertia.visit(route('kitab.create'))"
                >
                    <i class="ri-add-fill mr-1"></i>
                    Add Kitab
                </AppButton>

                <AppButton
                    v-if="can('kitab-recycle-bin-list')"
                    class="btn btn-secondary"
                    @click="$inertia.visit(route('kitab.recycleBin.index'))"
                >
                    <i class="ri-recycle-line mr-1"></i>
                    Recycle Bin
                </AppButton>
            </div>
        </template>
    </AppSectionHeader>
    <AppDataSearch
        v-if="kitabs.data.length || route().params.searchTerm"
        :url="route('kitab.index')"
        fields-to-search="name"
    ></AppDataSearch>
    <AppDataTable v-if="kitabs.data.length" :headers="headers">
        <template #TableBody>
            <tbody>
                <AppDataTableRow
                    v-for="(item, index) in kitabs.data"
                    :key="item.id"
                >
                    <AppDataTableData>
                        {{
                            (kitabs.current_page - 1) * kitabs.per_page +
                            (index + 1)
                        }}
                    </AppDataTableData>

                    <AppDataTableData>
                        {{ item.name }}
                    </AppDataTableData>

                    <AppDataTableData>
                        {{ item.chapters }}
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
                            v-if="can('kitab-edit')"
                            text="Edit"
                            class="mr-2"
                        >
                            <AppButton
                                class="btn btn-icon btn-primary"
                                @click="
                                    $inertia.visit(route('kitab.edit', item.id))
                                "
                            >
                                <i class="ri-edit-line"></i>
                            </AppButton>
                        </AppTooltip>

                        <!-- Delete -->
                        <AppTooltip v-if="can('kitab-delete')" text="Delete">
                            <AppButton
                                class="btn btn-icon btn-destructive"
                                @click="
                                    confirmDelete(
                                        route('kitab.destroy', item.id)
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
        :links="kitabs.links"
        :from="kitabs.from ?? 0"
        :to="kitabs.to ?? 0"
        :total="kitabs.total ?? 0"
        class="mt-4 justify-center"
    ></AppPaginator>

    <AppAlert v-if="!kitabs.data.length" class="mt-4">
        No data found.
    </AppAlert>

    <AppConfirmDialog ref="confirmDialogRef"></AppConfirmDialog>
</template>

<script setup>
import { ref } from 'vue'
import { Head } from '@inertiajs/vue3'
import useTitle from '@/Composables/useTitle'
import useAuthCan from '@/Composables/useAuthCan'

const { title } = useTitle('Kitabs')
const { can } = useAuthCan()

const props = defineProps({
    kitabs: {
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

const headers = ['SL', 'Kitab Name','Chapters','Hadiths', 'Status', 'Actions']

const confirmDialogRef = ref(null)
const confirmDelete = (deleteRoute) => {
    confirmDialogRef.value.openModal(deleteRoute)
}
</script>
