import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Layout from '../layouts/index.vue'
import EmptyLayout from '../layouts/EmptyLayout.vue'

export const routes = [
    {
        path: '/',
        redirect: '/home',
        component: Layout,
        meta: { title: '首页'},
        children: [{
            path: '/home',
            name: 'home',
            component: () => import('@/views/home.vue'),
            meta: { title: '首页' }
        }]
    },
    {
        path: '/pageA',
        name: 'pageA',
        meta: { title: '页面A'},
        component: Layout,
        children: [{
                path: '/page1',
                name: 'page1',
                meta: { title: '页面一'},
                component: () => import('../views/pageA/page1.vue'),
            },
            {
                path: '/page2',
                name: 'page2',
                meta: { title: '页面三'},
                component: () => import('../views/pageA/page2.vue'),
            },
            {
                path: '/page3',
                name: 'page3',
                meta: { title: '页面四'},
                component: () => import('../views/pageA/page3.vue'),
            }
        ]
    },
    {
        path: '/pageB',
        name: 'pageB',
        meta: { title: '页面B'},
        component: Layout,
        children: [{
                path: '/page5',
                name: 'page5',
                meta: { title: '页面五'},
                component: () => import('../views/pageB/page5.vue'),
            },
            {
                path: '/page6',
                name: 'page6',
                redirect:'/page7',
                component: EmptyLayout,
                meta: { title: '页面六'},
                children: [
                    { 
                        path: '/page7',
                        name: 'page7',
                        meta: { title: '页面四'},
                        component: () => import('../views/pageB/page7.vue'),
                    }
                ]
            },
        ]
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
