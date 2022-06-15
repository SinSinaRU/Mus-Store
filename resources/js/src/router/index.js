import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from "../store";

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: () => {
            switch (store.state.user.role) {
                case "guest":
                    return {name: 'homeGuest'};
                case "user":
                    return {name: 'homeUser'};
                case "admin":
                    return {name: 'homeAdmin'};
            }
        }
    },
    {
        path: '/about',
        name: 'about',
        redirect: () => {
            switch (store.state.user.role) {
                case "guest":
                    return {name: 'aboutGuest'};
                case "user":
                    return {name: 'aboutUser'};
            }
        }
    },
    {
        path: '/category/:categoryName',
        name: 'category',
        redirect: () => {
            switch (store.state.user.role) {
                case "guest":
                    return {name: 'categoryGuest'};
                case "user":
                    return {name: 'categoryUser'};
            }
        }
    },
    {
        path: '/product/:productName',
        name: 'product',
        redirect: () => {
            switch (store.state.user.role) {
                case "guest":
                    return {name: 'productGuest'};
                case "user":
                    return {name: 'productUser'};
            }
        }
    },
    {
        path: '/shopping-cart',
        name: 'shopping-cart',
        redirect: () => {
            switch (store.state.user.role) {
                case "guest":
                    return {name: 'shopping-cartGuest'};
                case "user":
                    return {name: 'shopping-cartUser'};
            }
        }
    },
    {
        path: '/search/:data',
        name: 'search',
        redirect: () => {
            switch (store.state.user.role) {
                case "guest":
                    return {name: 'searchGuest'};
                case "user":
                    return {name: 'searchUser'};
            }
        }
    },
    {
        path: '/',
        name: 'guest',
        meta: {requiresAuth: false},
        component: () => import('@/views/GuestLayout.vue'),
        children: [
            {
                path: '/',
                name: 'homeGuest',
                component: () => import('@/views/HomeView.vue')
            },
            {
                path: '/about',
                name: 'aboutGuest',
                component: () => import('@/views/AboutView.vue')
            },
            {
                path: '/category/:categoryName',
                name: 'categoryGuest',
                component: () => import('@/views/ProductCatalog.vue')
            },
            {
                path: '/product/:productName',
                name: 'productGuest',
                component: () => import('@/views/CardOfProduct.vue')
            },
            {
                path: '/login',
                name: 'login',
                component: () => import('@/views/LoginView.vue')
            },
            {
                path: '/register',
                name: 'register',
                component: () => import('@/views/RegisterView.vue')
            },
            {
                path: '/forgot-password',
                name: 'forgot-password',
                component: () => import('@/views/ForgotPasswordView.vue'),
            },
            {
                path: '/shopping-cart',
                name: 'shopping-cartGuest',
                component: () => import('@/views/ShoppingCartView.vue')
            },
            {
                path: '/search/:data',
                name: 'searchGuest',
                component: () => import('@/views/SearchView.vue')
            },
        ]
    },
    {
        path: '/',
        name: 'user',
        component: () => import('@/views/UserLayout.vue'),
        meta: {
            requiresAuth: true,
            isAdmin: false,
            isUser: true
        },
        children: [
            {
                path: '/',
                name: 'homeUser',
                component: () => import('@/views/HomeView.vue')
            },
            {
                path: '/about',
                name: 'aboutUser',
                component: () => import('@/views/AboutView.vue')
            },
            {
                path: '/category/:categoryName',
                name: 'categoryUser',
                component: () => import('@/views/ProductCatalog.vue')
            },
            {
                path: '/product/:productName',
                name: 'productUser',
                component: () => import('@/views/CardOfProduct.vue')
            },
            {
                path: '/shopping-cart',
                name: 'shopping-cartUser',
                component: () => import('@/views/ShoppingCartView.vue')
            },
            {
                path: '/profile/:id',
                name: 'profileUser',
                component: () => import('@/views/Profile.vue')
            },
            {
                path: '/search/:data',
                name: 'searchUser',
                component: () => import('@/views/SearchView.vue')
            },
        ]
    },
    {
        path: '/admin',
        name: 'admin',
        meta: {
            requiresAuth: true,
            isAdmin: true,
            isUser: false
        },
        component: () => import('@/views/AdminLayout.vue'),
        children: [
            {
                path: '/admin',
                name: 'homeAdmin',
                component: () => import('@/views/admin/HomeView.vue')
            },
            {
                path: '/admin/category/:categoryName',
                name: 'admin-category',
                component: () => import('@/views/admin/ProductCatalog.vue')
            },
            {
                path: '/admin/product/:productName',
                name: 'edit-product',
                component: () => import('@/views/admin/EditProduct.vue')
            },
            {
                path: '/admin/category/:categoryName/add-product',
                name: 'add-product',
                component: () => import('@/views/admin/AddProduct.vue')
            },
            {
                path: '/admin/profile/:id',
                name: 'profileAdmin',
                component: () => import('@/views/admin/Profile.vue')
            },
            {
                path: '/admin/profile-management',
                name: 'profileManagement',
                component: () => import('@/views/admin/ProfileManagement.vue')
            },
            {
                path: '/admin/profile-management/:id',
                name: 'profileEdit',
                component: () => import('@/views/admin/ProfileEdit.vue')
            },
            {
                path: '/admin/order-management',
                name: 'orderManagement',
                component: () => import('@/views/admin/OrderManagement.vue')
            },
            {
                path: '/admin/order-management/:id',
                name: 'orderEdit',
                component: () => import('@/views/admin/OrderEdit.vue')
            },
            {
                path: '/admin/search/:data',
                name: 'searchAdmin',
                component: () => import('@/views/admin/SearchView.vue')
            },
        ]
    }
]


const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
})

router.beforeEach((to, from, next) => {

    if (store.state.user.role === 'user') {

        if (to.meta.requiresAuth && to.meta.isUser) {
            return next();
        }
    } else if (store.state.user.role === 'admin') {
        if (to.meta.requiresAuth && to.meta.isAdmin) {
            return next();
        }
    } else if (store.state.user.role === 'guest') {
        if (!to.meta.requiresAuth) {
            return next();
        }
    } else {
        return next();
    }
})
;
export default router
