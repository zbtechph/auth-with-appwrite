import { createRouter, createWebHistory } from 'vue-router'
import store from './store'

const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('./pages/Home.vue')
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('./pages/auth/Login.vue')
    },
    {
        name: 'signup',
        path: '/signup',
        component: () => import('./pages/auth/Signup.vue')
    },
    {
        name: 'account',
        path: '/account',
        component: () => import('./pages/Account.vue'),
        meta: {
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next)=>{
    if(to.meta.requiresAuth && ! store.state.session){
        return next({name: 'login', query: { redirect: to.fullPath }})
    }
    return next();
})

export default router