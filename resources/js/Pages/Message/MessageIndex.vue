<template>
    <Head :title="title"></Head>
    <AppSectionHeader :title="title" :bread-crumb="breadCrumb">
        <template #right>
            <div class="flex gap-2">
                <AppButton
                    v-if="can('message-recycle-bin-list')"
                    class="btn btn-secondary"
                    @click="$inertia.visit(route('message.recycleBin.index'))"
                >
                    <i class="ri-recycle-line mr-1"></i>
                    Recycle Bin
                </AppButton>
            </div>
        </template>
    </AppSectionHeader>
    <AppDataSearch
        v-if="messages.data.length || route().params.searchTerm"
        :url="route('message.index')"
        fields-to-search="name"
    ></AppDataSearch>
    <AppDataTable v-if="messages.data.length" :headers="headers">
        <template #TableBody>
            <tbody>
                <AppDataTableRow
                    v-for="(item, index) in messages.data"
                    :key="item.id"
                    :class="!item.read_at ? 'font-semibold' : ''"
                    class="cursor-pointer hover:bg-skin-neutral-4 hover:text-skin-primary-12"
                    @click="$inertia.visit(route('message.show', item.id))"
                >
                    <!-- <AppDataTableData>
                        {{
                            (messages.current_page - 1) * messages.per_page +
                            (index + 1)
                        }}
                    </AppDataTableData> -->

                    <AppDataTableData
                        :class="
                            !item.read_at
                                ? 'font-semibold'
                                : 'text-skin-neutral-11'
                        "
                    >
                        {{ item.name }}
                    </AppDataTableData>

                    <AppDataTableData
                        :class="
                            !item.read_at
                                ? 'font-semibold'
                                : 'text-skin-neutral-11'
                        "
                    >
                        {{ item.phone }}
                    </AppDataTableData>

                    <AppDataTableData
                        :class="
                            !item.read_at
                                ? 'font-semibold'
                                : 'text-skin-neutral-11'
                        "
                    >
                        {{ item.subject }}
                    </AppDataTableData>

                    <AppDataTableData
                        :class="
                            !item.read_at
                                ? 'font-semibold'
                                : 'text-skin-neutral-11'
                        "
                    >
                        {{ item.created_at }}
                    </AppDataTableData>

                    <!-- <AppDataTableData>
                        <AppTooltip
                            v-if="can('message-edit')"
                            text="Edit"
                            class="mr-2"
                        >
                            <AppButton
                                class="btn btn-icon btn-primary"
                                @click="
                                    $inertia.visit(
                                        route('message.edit', item.id)
                                    )
                                "
                            >
                                <i class="ri-edit-line"></i>
                            </AppButton>
                        </AppTooltip>

                        <AppTooltip v-if="can('message-delete')" text="Delete">
                            <AppButton
                                class="btn btn-icon btn-destructive"
                                @click="
                                    confirmDelete(
                                        route('message.destroy', item.id)
                                    )
                                "
                            >
                                <i class="ri-delete-bin-line"></i>
                            </AppButton>
                        </AppTooltip>
                    </AppDataTableData> -->
                </AppDataTableRow>
            </tbody>
        </template>
    </AppDataTable>

    <AppPaginator
        :links="messages.links"
        :from="messages.from ?? 0"
        :to="messages.to ?? 0"
        :total="messages.total ?? 0"
        class="mt-4 justify-center"
    ></AppPaginator>

    <AppAlert v-if="!messages.data.length" class="mt-4">
        No data found.
    </AppAlert>

    <AppConfirmDialog ref="confirmDialogRef"></AppConfirmDialog>
</template>

<script setup>
import { ref } from 'vue'
import { Head } from '@inertiajs/vue3'
import useTitle from '@/Composables/useTitle'
import useAuthCan from '@/Composables/useAuthCan'

const { title } = useTitle('Messages')
const { can } = useAuthCan()

const props = defineProps({
    messages: {
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

const headers = ['Sender', 'Phone', 'Subject', 'Date']

const confirmDialogRef = ref(null)
const confirmDelete = (deleteRoute) => {
    confirmDialogRef.value.openModal(deleteRoute)
}
</script>
