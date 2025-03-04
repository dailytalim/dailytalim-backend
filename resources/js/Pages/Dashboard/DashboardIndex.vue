<template>
    <Head title="Dashboard"></Head>
    <div
        class="shadow-xs mt-6 flex flex-col justify-between rounded-md border border-skin-neutral-4 bg-skin-neutral-2 px-4 py-2 md:flex-row"
    >
        <div>
            <i class="ri-megaphone-line"></i>
            Welcome
            <span class="font-bold">{{ $page.props.auth.user.name }}</span> !
        </div>
    </div>

    <div class="my-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <!-- Hadith count card -->
        <DashboardCard
            v-if="can('hadith-list')"
            link="hadith.index"
            label="Hadiths"
            :count="props.count.hadiths"
            icon="ri-book-open-line"
            color="success"
        ></DashboardCard>

        <!-- Kitab count card -->
        <DashboardCard
            v-if="can('kitab-list')"
            link="kitab.index"
            label="Kitabs"
            :count="props.count.kitabs"
            icon="ri-book-marked-line"
            color="success"
        ></DashboardCard>

        <!-- Chapter count card -->
        <DashboardCard
            v-if="can('chapter-list')"
            link="chapter.index"
            label="Chapters"
            :count="props.count.chapters"
            icon="ri-book-read-line"
            color="success"
        ></DashboardCard>

        <!-- Post count card -->
        <DashboardCard
            v-if="can('Blog')"
            link="post.index"
            label="Posts"
            :count="props.count.posts"
            icon="ri-article-line"
            color="success"
        ></DashboardCard>

        <DashboardCard
            v-if="can('Blog')"
            link="category.index"
            label="Categories"
            :count="props.count.categories"
            icon="ri-node-tree"
            color="success"
        ></DashboardCard>

        <DashboardCard
            v-if="can('Blog')"
            link="tag.index"
            label="Tags"
            :count="props.count.tags"
            icon="ri-bookmark-line"
            color="success"
        ></DashboardCard>

        <!-- User Count Card -->
        <DashboardCard
            v-if="can('Acl')"
            link="user.index"
            label="Users"
            :count="props.count.users"
            icon="ri-user-line"
            color="info"
        ></DashboardCard>

        <!-- Role Count Card -->
        <DashboardCard
            v-if="can('Acl')"
            link="aclRole.index"
            label="Roles"
            :count="props.count.roles"
            icon="ri-account-box-line"
            color="warning"
        ></DashboardCard>

        <!-- Permission Count Card -->
        <DashboardCard
            v-if="can('Acl')"
            link="aclPermission.index"
            label="Permissions"
            :count="props.count.permissions"
            icon="ri-shield-keyhole-line"
            color="success"
        ></DashboardCard>

        
    </div>
</template>
<script setup>
import { Head } from '@inertiajs/vue3'
import useAuthCan from '@/Composables/useAuthCan'
import DashboardCard from '@/Pages/Dashboard/Components/DashboardCard.vue'

const { can } = useAuthCan()

const props = defineProps({
    count: {
        type: Object
    }
})
</script>
