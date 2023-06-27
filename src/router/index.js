import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    // 路由跳转方式
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/home')
        },
        {
            path: '/home',
            component: () => import('../views/home')
        },
        {
            path: '/cart',
            component: () => import('../views/cart')
        },
        {
            path: '/mine',
            component: () => import('../views/mine')
        },
        {
            path: '/order',
            component: () => import('../views/order')
        },
        {
            path: '/store',
            component: () => import('../views/store')
        },
        {
            path: '/createorder',
            component: () => import('../views/createOrder')
        },
        {
            path: '/address',
            component: () => import('../views/address')
        },
        {
            path: '/addressedit',
            component: () => import('../views/addressEdit')
        },
        {
            path: '/userinfoedit',
            component: () => import('../views/userinfoedit')
        }

    ]
})

export default router