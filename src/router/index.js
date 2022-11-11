import {createRouter, createWebHistory} from 'vue-router'

const publicRouts = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/',
        component: () => import('@/views/layout/index.vue')
    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: publicRouts
})

export default router
