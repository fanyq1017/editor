import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'MainShow',
        component: () => import('../components/MainShow.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',

                component: () => import('../components/home/HomeShow.vue')

            },
            {
                path: '/editor',
                name: 'editor',
                component: () => import('../components/MarkdownEditor')

            },
            {
                path: '/message',
                name: 'message',
                component: () => import('../components/message/MessageShow.vue')

            },
            {
                path: '/activity',
                name: 'activity',
                component: () => import('../components/activity/ActivityShow.vue')

            },
            {
                path: '/articledetail',
                name: 'activity',
                component: () => import('../components/article/ArticleDetail.vue')

            }
        ]
    },
    {
        path: '/manage',
        name: 'manage',
        component: () => import('../components/ManageMain'),
        children: [
            {
                path: '/manage/postarticle',
                name: ' postarticle',

                component: () => import('../components/PostArticle/PostArticle.vue')
            },
            {
                path: '/manage/articletable',
                name: 'articletable',

                component: () => import('../components/PostArticle/ArticleTable')
            },

            {
                path: '/manage/postactivity',
                name: ' postarticle',

                component: () => import('../components/ManageActivity/ActivityPost.vue')
            },
            {
                path: '/manage/manageuser',
                name: 'manageuser',

                component: () => import('../components/ManageUser/ManageUser.vue')
            },

            {
                path: '/manage/manageactivity',
                name: 'manageactivity',

                component: () => import('../components/ManageActivity/ManageActivity.vue')
            },

        ]
    },

    {
        path: '/login',
        name: 'login',
        component: () => import('../components/LoginShow.vue')
    }
]
export default new VueRouter({
    mode: 'history',
    routes
})
