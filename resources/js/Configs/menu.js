export default {
    // main navigation - side menu
    items: [
        {
            label: 'Dashboard',
            permission: 'Dashboard',
            icon: 'ri-dashboard-line',
            link: route('dashboard.index')
        },

        {
            label: 'Messages',
            permission: 'message-list',
            icon: 'ri-mail-send-line',
            link: route('message.index')
        },

        {
            label: 'Hadith Management',
            permission: 'hadith-menu',
            children: [
                {
                    label: 'Hadiths',
                    permission: 'hadith-list',
                    icon: 'ri-book-open-line',
                    link: route('hadith.index')
                },
                {
                    label: 'Chapters',
                    permission: 'chapter-list',
                    icon: 'ri-book-read-line',
                    link: route('chapter.index')
                },
                {
                    label: 'Kitabs',
                    permission: 'kitab-list',
                    icon: 'ri-book-marked-line',
                    link: route('kitab.index')
                }
            ]
        },

        {
            label: 'Blog',
            permission: 'Blog',
            children: [
                {
                    label: 'Posts',
                    permission: 'Blog: Post - List',
                    icon: 'ri-draft-line',
                    link: route('blogPost.index')
                },
                {
                    label: 'Categories',
                    permission: 'Blog: Category - List',
                    icon: 'ri-folders-line',
                    link: route('blogCategory.index')
                },
                {
                    label: 'Tags',
                    permission: 'Blog: Tag - List',
                    icon: 'ri-price-tag-3-line',
                    link: route('blogTag.index')
                },
                {
                    label: 'Authors',
                    permission: 'Blog: Author - List',
                    icon: 'ri-team-line',
                    link: route('blogAuthor.index')
                }
            ]
        },

        {
            label: 'Access Control List',
            permission: 'Acl',
            children: [
                {
                    label: 'Users',
                    permission: 'Acl: User - List',
                    icon: 'ri-user-line',
                    link: route('user.index')
                },
                {
                    label: 'Permissions',
                    permission: 'Acl: Permission - List',
                    icon: 'ri-shield-keyhole-line',
                    link: route('aclPermission.index')
                },
                {
                    label: 'Roles',
                    permission: 'Acl: Role - List',
                    icon: 'ri-account-box-line',
                    link: route('aclRole.index')
                }
            ]
        }
    ]
}
