import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name: 'MainShow',
        component: () => import('../components/MainShow.vue'),
        redirect:'/home',
        children:[
            {
                path: '/home',
                name:'home',
    
                component:() => import('../components/home/HomeShow.vue')

            },
            {
                path: '/editor',
                name:'editor',
                component:() => import('../components/MarkdownEditor')

            },
            {
                path: '/message',
                name:'message',
                component:() => import('../components/message/MessageShow.vue')

            }
        ]
    },
    {
        path:'/manage',
        name:'manage',
        component: () => import('../components/ManageMain')
    },

    {
        path:'login',
        name:'login'
    }
]
export default new VueRouter({
    mode: 'history',
    routes
})
